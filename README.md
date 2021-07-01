# Decoder Ring

A Thinkful assignment testing our understanding of JavaScript. You can encode or decode messages with three different ciphers. The main takeaway from this assignment for me was realizing just how many ways you can solve a problem using Javascript! 

## Caesar Cipher
The Caesar Cipher is a type of cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. This was challenging at first, but through research and teamwork, we landed on the concept of using charCodeAt to get the unicode index of the inputted letter, then shift that x amount of times depending on what the user inputs. 

![A screen shot of the Caesar Cihper](/images/Caesar.png)


## Polybius Cipher
The Polybius Cipher arranges the alphabet into rows and columns to assign two digit values. I attempted to softcode this, but kept hitting road blocks. I ended up hard coding this with a switch statement, which works as expected, however I plan on going back and solving this properly.

![A screen shot of the Polybius Cipher](/images/Polybius.png)


## Substitution Cipher
The Substitution Cipher takes a substitution alphabet and tranposes it to the standard alphabet. I thought this would be the most difficult cipher to tackle, but I was able to solve this quickly. This cipher is when everthing "clicked" for me during this project. 

![A screen shot of the Substitution](/images/Substitution.png)

## Link

https://decoder-ring-coral.vercel.app/

## Technology

Built with Javascript  
Styled with Bootstrap
