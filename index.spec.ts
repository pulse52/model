import "jest"
import { pulse52 } from "./index"

describe("pulse52", () => {
	it("Feed.Entry.Author.is", () => {
		expect(pulse52.Feed.Entry.Author.is({})).toEqual(false)
	})
})
