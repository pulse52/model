import { isoly } from "isoly"
import { isly } from "isly"
import { Author as EntryAuthor } from "./Author"
import { Content as EntryContent } from "./Content"
import { Creatable as EntryCreatable } from "./Creatable"

export interface Entry extends Entry.Creatable {
	published: isoly.DateTime
	modified?: isoly.DateTime
}

export namespace Entry {
	export const type = EntryCreatable.type.extend<Entry>(
		{
			published: isly.fromIs<isoly.DateTime>("isoly.DateTime", isoly.DateTime.is),
			modified: isly.fromIs<isoly.DateTime>("isoly.DateTime", isoly.DateTime.is).optional(),
		},
		"pulse52.Feed.Entry"
	)
	export const is = type.is
	export const flaw = type.flaw
	export import Author = EntryAuthor
	export import Content = EntryContent
	export import Creatable = EntryCreatable
}
