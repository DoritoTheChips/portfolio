export type SnippetType = 'music' | 'code' | 'video' | 'model' | 'level' | 'misc';

export default class SnippetData {
    id: string;
    name: string;
    type: SnippetType; // metadata only; no longer drives a badge or accent color
    summary: string; // short one-liner shown in the list row
    htmlDescription: string;
    iconUrl: string; // used as thumbnail
    projectIds: string[]; // ids from ProjectsData listed as related projects on the detail page

    constructor(id: string, name: string, type: SnippetType, iconUrl: string, summary: string, html: string, projectIds: string[] = []) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.summary = summary;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.projectIds = projectIds;
    }
}
