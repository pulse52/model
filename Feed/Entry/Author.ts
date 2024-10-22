import { isly } from "isly"

export interface Author {
	name: string
	email: string
	avatar: string
	title?: string
	link?: string
}

export namespace Author {
	export const type = isly.object<Author>(
		{
			name: isly.string(),
			email: isly.string(),
			avatar: isly.string(),
			title: isly.string().optional(),
			link: isly.string().optional(),
		},
		"pulse52.Feed.Entry.Author"
	)
	export const is = type.is
	export const flaw = type.flaw
}
