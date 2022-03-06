# TeX-Demo

[Try LaTeX](https://tex-demo.vercel.app)
 

## Download to Get Started
- Visual studio code, a general purpose text editor *[Get](https://code.visualstudio.com)* 

Trick: in a GitHub repository such as this one, press `.` on your keyboad to acess VS Code!

- LaTeX Workshop, a convenient extension for VS Code *[Get](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)*

- *[Get](https://www.latex-project.org/get/)* LaTeX itself 

---

## Guides by the authors of AMS-TeX and TeX 

- The Joy of TeX (Spivak) https://ctan.org/tex-archive/info/joy-of-tex?lang=en
- The TEXbook (Knuth) Source code at https://ctan.org/pkg/texbook?lang=en
(see also https://en.wikipedia.org/wiki/Computers_and_Typesetting, recordings on YouTube https://youtu.be/jbrMBOF61e0)

Worth at least skimming from cover to cover!

---

## How To Run `.tex` files to generate `PDF`
To compile the LaTeX file named `hello.tex` into PDF, run the following command with your terminal AT THE FOLDER CONTAININGING `hello.tex`
```
pdflatex hello
```

If you are new to the terminal, an easy way to acess it is by right clicking on the folder containing `hello.tex` as follows

![how to open terminal](https://github.com/flashyboat/TeX-Demo/blob/main/assets/terminal.png)

In VS Code you can also acess the terminal by going up to the menu bar, or using the keyboard shortcut `control` + `~` (beside 1 on your keyboard).

Suppose you have `hello.tex` and you call 
```
latex hello
```
you will get `hello.div` which is called a device independent file, to convert it to PDF, run 
```
dvipdfm hello
```

To compile the TeX file (not LaTeX) named `hello.tex` into PDF, call 
```
pdftex hello
```
this is because `tex hello` generates a DVI file by default and you don't want to do the extra work `dvipdfm hello` to generate the PDF.

⚠️ If the TeX compiler displays you an error, you can exit by typing at the terminal `control` + `d` this is called the EOF (end of file) character. Developing the patience to understand errors is a highly worthwhile skills for the beginning TeX users to adopt. You can even write tests for your `.tex` file to check for errors before compiling. For example, if a new user frequently writes `\begin{document]` (which is the wrong right brace), they may write a program, such as 
```
grep "document]" hello.tex
```
to try to locate any such errors. The user may then accumulate a file of such error checks to run on their TeX file before compiling into PDF.

Another good habit for TeX users who write longer documents to stay organized is to break apart a length documents into smaller chunks, and to use separate folder with descriptive names like `images` or `chapters` and import these chunks into a `main.tex` which is to be compiled. This strategy of *modularity for the separation of concerns* is illustrated in `4.tex` in this repository, and accomplished through the use of the control sequence
```
\input{}
```

---
## Basic file structure 
TeX (not LaTeX)
```
    Your content 

    \bye
```

LaTeX
```
    \documentclass{article}

    \begin{document}

        Your content

    \end{document}
```


## Resources

| Item | Link |
| ----------- | ----------- |
| Where you can find packages | https://www.ctan.org/pkg/:A |
| Package documenation | https://texdoc.org/index.html |
|Commutative diagram generator | https://q.uiver.app |
| Cheat Sheet | https://wch.github.io/latexsheet/latexsheet.pdf|
| Get help for TeX| https://tex.stackexchange.com/ |
| Guide 1 | https://www.ams.org/arc/tex/amsmath/amsldoc.pdf |
| Guide 2| https://ctan.mirror.globo.tech/info/lshort/english/lshort-letter.pdf |
|mathcha?|https://www.mathcha.io|
|fonts |https://tug.org/FontCatalogue/|
| nice looking template `tufte-latex`| https://ctan.org/pkg/tufte-latex?lang=en|
| Write presenation slides `beamer`| https://ctan.org/pkg/beamer?lang=en|
| Symbols and Emoji| https://muug.ca/mirror/ctan/info/symbols/comprehensive/symbols-letter.pdf|
|`tikz` for graphics |https://www.ctan.org/pkg/pgf|
|GeoGebra Version5 for exporting tikz| https://www.geogebra.org/download |
| Circuits/ logic gates| https://www.ctan.org/pkg/circuitikz |
|`quantikz`|https://ctan.org/pkg/quantikz?lang=en|
|Pandoc to convert TeX to HTML, MD and other formats| https://pandoc.org/MANUAL.html |
|Automate build process with `latexmk` | https://mg.readthedocs.io/latexmk.html|
|Mendley Citation (free for students)| https://www.mendeley.com/search/ |
|Math Jax| https://www.mathjax.org |
|KaTeX by Khan Academy |https://katex.org|
|How to use Terminal| https://support.apple.com/en-ca/guide/terminal/welcome/mac |
|How to use `make`| https://www.gnu.org/software/make/manual/ |
|MathQuill|http://mathquill.com|


---
## Export GeoGebra As Tikz

Export as tikz available in GeoGebra version 5, but not in latest version (?)

![screenshot](https://github.com/flashyboat/TeX-Demo/blob/main/assets/geo.png)


---
## A Smaller TeX Download for MacOS


If you wish a smaller install of TeX, you can get `BasicTeX`. One way to do this on MacOS is through the package manager *[brew](https://formulae.brew.sh/cask/basictex)* 

In the smaller install, you get the standard TeX compilers `tex, latex, amstex, pdftex, pdflatex, mf (MetaFont), mpost (MetaPost)`.

When you need to install packages, use the TeX specific package meanager `tlmgr` (TeX Live Manager). For example to see whether the `amsmath` package is installed, run at terminal
```
tlmgr info amsmath
```

To install, run with supervisor permission
```
sudo tlmgr install amsmath
```

---
## Random Things

| Item | Link |
| ----------- | ----------- |
|Overleaf GitHub | https://github.com/overleaf/overleaf |

## The Terminal Editor Vim

MacOS terminal commands often have manuals that can be accessed by the command `man`. For instance `which tex` returns  the folder at which the TeX program is installed. To see the manual documenting the `which` command, you run `man which`. This opens up the manual in the Vim editor, which proves to be a quirky editor that new users find notorious to use: to exit, you would type `q` rather than clicking on an icon. Likewise Vim is so designed to rely completely on the users' keyboard and to banish the use of the mouse. Just like the keyboard shortcuts `ctrl` + `c` is faster than right click and copy, the designers of Vim seek to carry the use of shortcuts to an extream. In exchange for shortcut and efficieny, Vim also loses the inutiveness of icons and clicks. Some new users to initially shy away from Vim, but as they gain experience with the terminal, which is itelf an application that traades off a pretty user interface in return for a set of powerful commands, and as users frequently acesses manuals through `man` they begin to catch many occasions in which Vim is more convenient than the graphical editors. 

To perform basic editing, make sure you know 
- To open a file named `1.tex` navigate to the folder containing this file and run at the terminal 
```
vim 1.tex
```
- To write to the file once opened, press the key `i` for insert. 
- Once finished writing, press `esc` to escape. Once you pressed `esc` things you type can now be recognized as commands, and not contents of the file!
- To save and quit, type `:x` Note the colon `:` plays an analogous to `\` in the TeX control sequence `\input{}` and signifies that `x` is a command rather than regular text. 
- To save without quitting, enter `:w`
- To quit but discard any changes, the command is `:q!`

Some less trivial things that can be useful in preparing TeX documents with Vim 
- To run `pdftex 1.tex` or any other shell command in Vim. First make sure you `esc` the writing mode, then enter
```
:!(pdftex 1.tex)
``` 
- To turn on line numbers you enter `:set number`

Some nice things to know
- To erase the contents of a file `:%d`
- To delete lines 3 to 33 `:3,33d` wherein `d` means delete. The related method for erasing the contents of a file is `:1,$d` wherein `$` signifies the end of the file.

Consult https://vimhelp.org/quickref.txt.html for a more comprehensive reference. 

# Purpose

This is the curation for my YouTube video on TeX. Speficially, it introduces the workflow, ecosystem, tools, resources around using TeX. LaTeX is relevant today because it is the format used by modern publishers of books and journals in mathematics and the natural sciences. Many note taking apps these days inputs equations with LaTeX; teachers prepare their tests in LaTeX and students author their assignments in LaTeX. 
