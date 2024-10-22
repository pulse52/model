import { isoly } from "isoly"
import { isly } from "isly"
import { Entry as FeedEntry } from "./Entry"

export interface Feed {
	title: string
	subtitle: string
	description: string
	link: string
	language: isoly.Language
	entries: Feed.Entry[]
}

export namespace Feed {
	export const type = isly.object<Feed>(
		{
			title: isly.string(),
			subtitle: isly.string(),
			description: isly.string(),
			link: isly.string(),
			language: isly.fromIs<isoly.Language>("isoly.Language", isoly.Language.is),
			entries: FeedEntry.type.array(),
		},
		"pulse52.Feed"
	)
	export const is = type.is
	export const flaw = type.flaw
	export import Entry = FeedEntry
}
