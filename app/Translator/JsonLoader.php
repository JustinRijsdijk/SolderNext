<?php

declare(strict_types=1);

namespace App\Translator;

use Illuminate\Translation\FileLoader;

class JsonLoader extends FileLoader
{
    public function load($locale, $group, $namespace = null)
    {
        $lines = collect(parent::load($locale, $group, $namespace));

        $path = lang_path().'/'.$locale;

        foreach (glob($path.'/*.json') as $file) {
            $json = json_decode(file_get_contents($file), true);
            if (is_array($json)) {
                $lines->push($json);
            }
        }

        return $lines;
    }
}
