// checkout payment-method show hide on radio button click start
const payNowBtn = document.querySelector('.checkout #pay-now-btn');
const payAtRateBtn = document.querySelector('.checkout #pay-at-rate-btn');
const payNowContent = document.querySelector('.checkout #pay-now-content');
const payAtRateContent = document.querySelector('.checkout #pay-at-rate-content');

payNowBtn.addEventListener('click', () => {
    payNowContent.classList.remove('d-none');
    payAtRateContent.classList.add('d-none');
})

payAtRateBtn.addEventListener('click', () => {
    payNowContent.classList.add('d-none');
    payAtRateContent.classList.remove('d-none');
})



const payNowContentBtn1 = document.querySelector('.checkout #pay-now-content-btn-1');
const payNowContentBtn2 = document.querySelector('.checkout #pay-now-content-btn-2');
const payNowContentBtn3 = document.querySelector('.checkout #pay-now-content-btn-3');
const payNowContent1 = document.querySelector('.checkout #pay-now-content-1');
const payNowContent2 = document.querySelector('.checkout #pay-now-content-2');
const payNowContent3 = document.querySelector('.checkout #pay-now-content-3');

payNowContentBtn1.addEventListener('click', () => {
    payNowContent1.classList.remove('d-none');
    payNowContent2.classList.add('d-none');
    payNowContent3.classList.add('d-none');
})
payNowContentBtn2.addEventListener('click', () => {
    payNowContent1.classList.add('d-none');
    payNowContent2.classList.remove('d-none');
    payNowContent3.classList.add('d-none');
})
payNowContentBtn3.addEventListener('click', () => {
    payNowContent1.classList.add('d-none');
    payNowContent2.classList.add('d-none');
    payNowContent3.classList.remove('d-none');
})


const payAtRateContentBtn1 = document.querySelector('.checkout #pay-at-rate-content-btn-1');
const payAtRateContentBtn2 = document.querySelector('.checkout #pay-at-rate-content-btn-2');
const payAtRateContent1 = document.querySelector('.checkout #pay-at-rate-content-1');
const payAtRateContent2 = document.querySelector('.checkout #pay-at-rate-content-2');

payAtRateContentBtn1.addEventListener('click', () => {
    payAtRateContent1.classList.remove('d-none');
    payAtRateContent2.classList.add('d-none');
})
payAtRateContentBtn2.addEventListener('click', () => {
    payAtRateContent1.classList.add('d-none');
    payAtRateContent2.classList.remove('d-none');
})

// checkout payment-method show hide on radio button click end