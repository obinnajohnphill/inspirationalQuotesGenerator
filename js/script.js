$(document).ready(function ()
{
    // generavimas
    $("form#options input[type=submit]").click();
    var name = "info";
    var domain = "1s0s.com";
    $('.contact-us-details').append('<a href=\"mailto:' + name + '@' + domain + '\">' + name + '@' + domain + '</a>');
    $('.about_us_text').append('<a href=\"mailto:' + name + '@' + domain + '\">contact us.</a>');

});

function countSyllables(word){
    var wordSyllables = 0;
    if(word.length <= 2 && word.length >= 1) {
        wordSyllables = 1;
    }
    else if(word.length > 2) {
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        if(!word.match(/[aeiouy]{1,2}/g)){
            wordSyllables = 1;
        }
        else {
            wordSyllables = word.match(/[aeiouy]{1,2}/g).length;
        }
    }
    return wordSyllables;
}

function getResults(qty, count, arr, firstLetter,  lastLetter, wordSizeBy, comparing){
    var word, condition, pos, result_arr = [];
    var steps = arr.length;
    if(count === '') {
        while(result_arr.length < qty && steps > 0){
            pos = Math.floor((Math.random() * arr.length));
            word = arr[pos];
            arr.splice(pos, 1);
            steps--;
            if(lastLetter !== '' && firstLetter !== ''){
                condition = ((word[0] === firstLetter.toUpperCase() || word[0] === firstLetter) && word[word.length-1] === lastLetter);
            }
            else if(lastLetter !== '' && firstLetter === ''){
                condition = (word[word.length-1] === lastLetter);
            }
            else if(lastLetter === '' && firstLetter !== ''){
                condition = (word[0] === firstLetter.toUpperCase() || word[0] === firstLetter);
            }
            else {
                condition = true;
            }
            if(condition){
                if(result_arr.indexOf(word) === -1) {
                    result_arr.push(word);
                }
            }
        }
    }
    else if(count !== ''){
        while(result_arr.length < qty && steps > 0){
            pos = Math.floor((Math.random() * arr.length));
            word = arr[pos];
            arr.slice(pos, 1);
            steps--;
            if(lastLetter !== '' && firstLetter !== ''){
                condition = ((word[0] === firstLetter.toUpperCase() || word[0] === firstLetter) && word[word.length-1] === lastLetter);
            }
            else if(lastLetter !== '' && firstLetter === ''){
                condition = (word[word.length-1] === lastLetter);
            }
            else if(lastLetter === '' && firstLetter !== ''){
                condition = (word[0] === firstLetter.toUpperCase() || word[0] === firstLetter);
            }
            else {
                condition = true;
            }
            if(condition){
                if(wordSizeBy === 'length'){
                    if(comparing === 'equals'){
                        if(word.length == count){
                            if(result_arr.indexOf(word) === -1) {
                                result_arr.push(word);
                            }

                        }
                    }
                    else if(comparing === 'less_than'){
                        if(word.length < count){
                            if(result_arr.indexOf(word) === -1) {
                                result_arr.push(word);
                            }
                        }
                    }
                    else if(comparing === 'greater_than'){
                        if(word.length > count){
                            if(result_arr.indexOf(word) === -1) {
                                result_arr.push(word);
                            }
                        }
                    }

                }
                else if(wordSizeBy === 'number_of_syllables'){
                    if(comparing === 'equals'){
                        if(countSyllables(word) == count){
                            if(result_arr.indexOf(word) === -1) {
                                result_arr.push(word);
                            }
                        }
                    }
                    else if(comparing === 'less_than'){
                        if(countSyllables(word) < count){
                            if(result_arr.indexOf(word) === -1) {
                                result_arr.push(word);
                            }
                        }
                    }
                    else if(comparing === 'greater_than'){
                        if(countSyllables(word) > count){
                            if(result_arr.indexOf(word) === -1) {
                                result_arr.push(word);
                            }
                        }
                    }
                }
            }
        }
    }
    return result_arr;
}