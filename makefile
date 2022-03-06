build: 8.pdf \
	clean

8.pdf: 8.tex
	pdflatex 8
	bibtex 8
	pdflatex 8
	pdflatex 8

clean:
	latexmk -c 
	rm 8.bbl
	open 8.pdf

remove: 
	@rm 8.pdf
	@echo "Your file was deleted :-) "