<?php

declare(strict_types=1);

namespace App\Translator;

use Illuminate\Translation\FileLoader;
use JsonException;

class JsonLoader extends FileLoader
{
    public function load($locale, $group, $namespace = null): array
    {
        // Load default PHP files first to have a fallback
        $base = parent::load($locale, $group, $namespace);

        $jsonDir = lang_path($locale);
        if (! is_dir($jsonDir)) {
            return $base;
        }

        // Determine which JSON files to look for
        if ($group && $group !== '*') {
            // Grouped: look for lang/{locale}/{group}.json
            $jsonFiles = glob($jsonDir . '/' . $group . '.json') ?: [];
        } else {
            // Wildcard / JSON-style: load all JSON files in this locale directory
            $jsonFiles = glob($jsonDir . '/*.json') ?: [];
        }

        if ($jsonFiles === false || $jsonFiles === []) {
            return $base;
        }

        $jsonLines = [];

        foreach ($jsonFiles as $file) {
            try {
                $content = json_decode(
                    file_get_contents($file),
                    true,
                    512,
                    JSON_THROW_ON_ERROR
                );
            } catch (JsonException $e) {
                // Optionally log here
                throw $e;
            }

            if (! is_array($content)) {
                continue;
            }

            // Merge each file into a single flat associative array.
            // Later files override earlier files on key collision.
            $jsonLines = array_replace_recursive($jsonLines, $content);
        }

        // If we successfully loaded *any* JSON lines, discard PHP and return JSON.
        if (! empty($jsonLines)) {
            return $jsonLines;
        }

        // Fallback when no usable JSON was found
        return $base;
    }
}
