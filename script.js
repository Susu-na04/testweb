// เปลี่ยนหน้า
function nextstep(currentId, nextId) {
    const currentstep = document.getElementById(currentId);
    if (currentstep) {
        currentstep.classList.remove('active');
    }
    const nextstep = document.getElementById(nextId);
    if (currentstep) {
        nextstep.classList.add('active');
    }
}
// ดับเทียน
let allcandles = document.querySelectorAll('.flame').length;
        let blowoutnumber = 0;

        function blowout(candleclick) {
            const flame = candleclick.querySelector('.flame');

            if (!flame.classList.contains('off')) {
                flame.classList.add('off');
                blowoutnumber++;

                if (blowoutnumber === allcandles) {
                    setTimeout(() => {
                        const cakepage = document.getElementById('cake-all');
                        if (cakepage) {
                            cakepage.classList.add('fade-out');
                        }
                        setTimeout(() => {
                            if (cakepage) {
                                cakepage.classList.remove('active', 'fade-out');
                            }
                            const letterpage = document.getElementById('letter');
                            if (letterpage) {
                                letterpage.classList.add('active');
                            }
                        }, 700);
                        
                    }, 600);
                }
            }
        }