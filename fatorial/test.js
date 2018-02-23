// módulos node
const assert = require('assert');
const fs = require('fs');

process.on('uncaughtException', function (e) {
    console.log(e);
});

// arquivo a testar é incluído como string... 
//eval(fs.readFileSync('polinomios.js').toString());
var cut = process.argv[process.argv.length - 1];
if (!cut.endsWith('fatorial.js')) {
    cut = process.argv[process.argv.length - 1];
};

const original = fs.readFileSync(cut, 'utf8');
const linhas = original.split(/\r?\n/);
const uteis = linhas.map(l => l.replace(/# .*: .*$|####$/, ''));
const code = uteis.join('\n');
eval(code);

describe('fatorial recursão de cauda', function (){

    it('exemplo simples 1', function () {
        assert.equal(fat(10), 3628800);
    });

    it('exemplo simples 2', function () {
        assert.equal(fat(14), 87178291200);
    });

    it('exemplo simples 3', function () {
        assert.equal(fat(18), 6402373705728000);
    });

    it('deve dar stack overflow para algoritmo errado', function () {
        // observe que o resultado não é verificado
        // apenas verificamos se o algoritmo consegue ir até o final
        // lembre: node não suporta TCO na atual implementação
        //fat(20000);
    });

});
