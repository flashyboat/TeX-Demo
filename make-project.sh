#!/bin/bash
read -p 'Name your folder: ' name
mkdir $name
cd $name
echo "your folder named '$name' was create on $(date), it is located at $(pwd)";

echo "\documentclass{article}

\begin{document}

\end{document}" > main.tex

mkdir assets



