/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO

    let chains = new Map();

    for(let chain of chains){
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if(chain.has(word)) {

       chain.get(word).push(nextWord);
      }
      else {
        chain.set(word, [nextWord]);
      }

    this.chain = chains;
    }

  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    let texts = Array.from(this.chains.keys());
    let text = MarkovMachine.choice(texts);
    let output = [];

    while(output.length < numWords && text !== null){
      output.push(text);
      text = MarkovMachine.choice(this.chains.get(text))
    }

    return output.join('');
  }



};

module.exports = {
  MarkovMachine,
}