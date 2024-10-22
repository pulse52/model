import { isly } from "isly"

export interface Content {
	text: string
	html?: string
}

export namespace Content {
	export const type = isly.object<Content>(
		{ text: isly.string(), html: isly.string().optional() },
		"pulse52.Feed.Entry.Content"
	)
	export const is = type.is
	export const flaw = type.flaw
}
