dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
export const nowLisbon = ()=> dayjs().tz("Europe/Lisbon");
