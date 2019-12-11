export class Setting {
    id: string;
    value: string;
}

export class SettingsModel {
    user_id: number;
    setting: Setting[];
}
