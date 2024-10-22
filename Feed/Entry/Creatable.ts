import { isoly } from "isoly"
import { isly } from "isly"
import { Author } from "./Author"
import { Content } from "./Content"

export interface Creatable {
	title: string
	subtitle: string
	link: string
	language: isoly.Language
	author: Author
	tags: string[]
	location?: string
	summary: Content
	content: Content
}

export namespace Creatable {
	export const type = isly.object<Creatable>(
		{
			title: isly.string(),
			subtitle: isly.string(),
			link: isly.string(),
			language: isly.fromIs("isoly.Language", isoly.Language.is),
			author: Author.type,
			tags: isly.string().array(),
			location: isly.string().optional(),
			summary: Content.type,
			content: Content.type,
		},
		"pulse52.Feed.Entry.Creatable"
	)
	export const is = type.is
	export const flaw = type.flaw
}
