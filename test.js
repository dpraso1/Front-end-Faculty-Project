const assert = chai.assert;
describe("testovi", function () {
    describe("funkcija trenutniCas", function () {
        it("vrijeme za koje nema aktivnosti", function () {
            trenutniCas(document.getElementById("sadrzaj"), "2021-01-11T13:45");
            assert.isNull(document.getElementById("t"));
        });
        it("vrijeme na sredini aktivnosti", function () {
            trenutniCas(document.getElementById("sadrzaj"), "2021-01-12T13:45");
            var obojena = document.getElementById("t");
            assert.equal(obojena.textContent.trim(), "RMA vježbe");
        });
        it("vrijeme na početku aktivnosti", function () {
            trenutniCas(document.getElementById("sadrzaj"), "2021-01-12T13:00");
            var obojena = document.getElementById("t");
            assert.equal(obojena.textContent.trim(), "RMA vježbe");
        });
        it("vrijeme na kraju aktivnosti", function () {
            trenutniCas(document.getElementById("sadrzaj"), "2021-01-12T14:30");
            var obojena = document.getElementById("t");
            assert.equal(obojena.textContent.trim(), "RMA vježbe");
        });
        it("vrijeme  neko drugo", function () {
            trenutniCas(document.getElementById("sadrzaj"), "2021-01-13T14:30");
            var obojena = document.getElementById("t");
            assert.isNotNull(obojena)
            if (obojena)
                assert.equal(obojena.innerText.trim(), "OI\nPredavanje");
        });
    });
});
