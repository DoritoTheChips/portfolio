export default class ProjectData {
    id: string;
    name: string;
    summary: string; // short one-liner shown in the list row
    htmlDescription: string;
    iconUrl: string; // used as thumbnail
    isPublished: boolean; // true only when the description offers a playable / installable build; source code alone doesn't count

    constructor(id: string, name: string, iconUrl: string, summary: string, html: string, isPublished = false) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isPublished = isPublished;
    }
}
