# Makefile
# make

STATIC = static/
POSTS = posts/

.PHONY: all
.PHONY: serve
all: index.css

serve:
	node bin/www

%.css: %.scss
	sass --no-cache --sourcemap=none --trace $< $@
	mv $@ $(STATIC)
