<?php

declare(strict_types=1);

namespace App\Translator;

use Illuminate\Translation\FileLoader;
use JsonException;

class JsonLoader extends FileLoader
{
    public function load($locale, $group, $namespace = null): array
    {
        // Load default Laravel lines first (PHP files)
        $base = parent::load($locale, $group, $namespace);

        $jsonDir = lang_path($locale);
        if (! is_dir($jsonDir)) {
            return $base;
        }

        $jsonFiles = glob($jsonDir . '/*.json');
        if ($jsonFiles === false) {
            return $base;
        }

        $merged = [];

        foreach ($jsonFiles as $file) {
            try {
                $content = json_decode(
                    file_get_contents($file),
                    true,
                    512,
                    JSON_THROW_ON_ERROR
                );
            } catch (JsonException $e) {
                throw $e;
            }

            if (is_array($content)) {
                $merged[] = $content;
            }
        }

        if (! empty($merged)) {
            $jsonMerged = array_replace_recursive(...$merged);
            return array_replace_recursive($base, $jsonMerged);
        }

        return $base;
    }
}
