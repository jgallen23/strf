boosh:
	./node_modules/.bin/smoosh make ./build.json

test:
	./node_modules/.bin/mocha --ui tdd test/strf.test.js
.PHONY: test
