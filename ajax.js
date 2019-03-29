let xmlHTTP= new XMLHttpRequest()

xmlHttp.onreadystatechange=function () {
  if(xmlHttp.readyState===4&&xmlHttp.status===200){
  console.log(xmlHttp.response);
  }
}
xmlHtpp.open(url,method)
xmlHTTP.send()
console.log(xmlHttp.response);
