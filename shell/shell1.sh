#!/bin/bash
targetDir="/Users/kyle/tmp/WEB-INF/lib/"
tempdir_class_prex="/Users/kyle/tmp/temps/classes/"
tempdir_java_prex="/Users/kyle/tmp/temps/javas/"

i=1
for file in `ls ${targetDir}`
do
	class_item_dir=${tempdir_class_prex}$i
	if [ ! -d "$class_item_dir" ]; then 
		mkdir $class_item_dir
	fi
	unzip  ${targetDir}$file  -d  $class_item_dir


	java_item_dir=${tempdir_java_prex}$i
	if [ ! -d "$java_item_dir" ]; then 
		mkdir $java_item_dir
	fi
	jad -d ${java_item_dir} -r -s java  ${class_item_dir}/**/*.class

	echo $file" :jad  finshed !"
	i=`expr $i + 1`
done