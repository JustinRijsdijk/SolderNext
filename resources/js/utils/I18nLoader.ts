export function loadLocaleMessages() {
    const messages: Record<string, any> = {};

    // Load: @lang/en/validation.json, @lang/en/auth.json, etc.
    const modules = import.meta.glob('@lang/*/*.json', { eager: true });

    for (const path in modules) {
        // path looks like: "/abs/path/.../lang/en/validation.json"
        const match = path.match(/lang\/([^/]+)\/([^/]+)\.json$/);

        if (!match) continue;

        const locale = match[1]; // "en"
        const group  = match[2]; // "validation", "auth", ...

        if (!messages[locale]) {
            messages[locale] = {};
        }

        // Each JSON file is a group (same structure as PHP lang array)
        messages[locale][group] = (modules as any)[path];
    }

    return messages;
}
