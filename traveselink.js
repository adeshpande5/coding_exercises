<html>
<body>

    <ul>
        <li id="a1"><a href="#a4">one</a></li>
        <li id="a3"><a href="#a2">three</a></li>
        <li id="a2"><a href="">two</a></li>
        <li id="a4"><a href="#a3">four</a></li>
    </ul>  
    
    <script>
    function traverse_link(startEle, outputTxt){
      if(startEle && startEle !== ''){
         var ele = document.getElementById(startEle);
         if(ele){
             var link = ele.getElementsByTagName("a")[0];
             if(link){
                var linkref = link.attributes['href'].value;
                if(linkref){
                      if(outputTxt && outputTxt !==''){
                          outputTxt += link.innerHTML + ' -> ';
                      } else{
                          outputTxt = link.innerHTML + ' -> ';
                      }
                      return traverse_link(linkref.substring(1), outputTxt);  
                }
                else{
                    return outputTxt += link.innerHTML;
                }
             }
         }
         
      }
   }
	console.log(traverse_link('a1'));
    </script>      

</body>

</html>