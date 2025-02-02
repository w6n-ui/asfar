 // أسعار الرحلات في JSON
 const prices = {
    "عمرة": {
        "بر": 95,
        "طيران": 95
    },
    "حج": {
        "بر": 5000,
        "طيران": 7000
    }
};

// تحديث عدد الزوار باستخدام localStorage
let visitorCount = localStorage.getItem('visitorCount');
if (visitorCount === null) {
    visitorCount = 1;
} else {
    visitorCount = parseInt(visitorCount) + 1;
}
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitor-count').innerText = visitorCount;

// احتساب السعر بناءً على الرحلة ووسيلة النقل وعدد الأشخاص
function calculateTotal() {
    const tripType = document.getElementById('trip-type').value;
    const transport = document.getElementById('transport').value;
    const peopleCount = parseInt(document.getElementById('people-count').value);

    const pricePerPerson = prices[tripType][transport];
    const total = pricePerPerson * peopleCount;

    // عرض المجموع
    document.getElementById('total-per-person').innerText = pricePerPerson;
    document.getElementById('total-price').innerText = total;
}

// تحديث المجموع عند تغيير الاختيارات
document.getElementById('trip-type').addEventListener('change', calculateTotal);
document.getElementById('transport').addEventListener('change', calculateTotal);
document.getElementById('people-count').addEventListener('input', calculateTotal);

// حساب السعر عند تحميل الصفحة لأول مرة
window.onload = calculateTotal;