function convert(s){
  var tab = s.split(" ");
  var res = [];
  var strres = "";
for(var i = 0; i < tab.length; i++)
  res.push(tab[i].charAt(0).toUpperCase()+tab[i].substr(1));
for(var j = 0; j < res.length; j++)
  strres = strres + res[j] + " ";
return strres;
}
 var test = 'the quick brown fox';
 convert(test);
