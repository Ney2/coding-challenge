/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    const str =  s.split(" ");
    let submit =[];
    let final = new Array();
    for(let i=0; i<str.length; i++) {
      let temp = [...str[i]];
      let pos = temp[temp.length - 1];
      final[pos] = str[i];
    }
    for(let i=1; i<final.length; i++) {
      let cutout= [...final[i]].slice(0, -1);
      submit.push(cutout.join(""));
    }  
    return(submit.join(" "));
  };