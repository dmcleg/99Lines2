document.addEventListener("DOMContentLoaded", function () {
    let friends = ['Preston', 'Ben', 'John David', 'Hope', 'Sheffield']
//inserting button
    var button = document.querySelector('button');
    button.onclick = function () {

        for (let myFriends = 0; myFriends < friends.length; myFriends++) {
//inserting divs
            const div = document.createElement('div');
            div.className = 'allMyFriends';
            document.getElementsByTagName('body')[0].appendChild(div);
//inserting h3 headings
            const h3 = document.createElement('h3');
            h3.innerText = friends[myFriends];
            div.appendChild(h3);




            for (let codeLeft = 99; codeLeft > 0; codeLeft--) {
//inserting paragraphs
                const paragraph = document.createElement('p');
                div.appendChild(paragraph);

                if (codeLeft > 2) {

                    paragraph.innerText = codeLeft + ' lines of code in the file, ' + codeLeft + ' lines of code; ' + friends[myFriends] + ' strikes one out, clears it all out, ' + (codeLeft - 1) + ' lines of code in the file!';
                } else if (codeLeft == 2) {


                    paragraph.innerText = codeLeft + ' lines of code in the file, ' + codeLeft + ' lines of code; ' + friends[myFriends] + ' strikes one out, clears it all out, ' + (codeLeft - 1) + ' line of code in the file!';
                } else {

                    paragraph.innerText = codeLeft + ' line of code in the file, ' + codeLeft + ' line of code; ' + friends[myFriends] + ' strikes one out, clears it all out, ' + (codeLeft - 1) + ' lines of code in the file!';
                }
            }
        }
    }

})