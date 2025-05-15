document.addEventListener('DOMContentLoaded', function() {
    const openId = '用户的OpenId'; // 这里需要替换为实际的 openId

    // 假数据
    const userData = {
        openId: '用户的OpenId',
        username: '示例用户',
        lastCheckTime: '2023-10-01 12:00:00',
        history: [
            '2023-09-01 12:00:00',
            '2023-08-01 12:00:00',
            '2023-07-01 12:00:00'
        ],
        pdfPath: 'report.pdf'
    };

    // 显示用户信息
    if (document.getElementById('username')) {
        document.getElementById('username').textContent = userData.username;
        document.getElementById('last-check-time').textContent = userData.lastCheckTime;
    }

    // 查看历史记录
    if (document.getElementById('view-history')) {
        document.getElementById('view-history').addEventListener('click', function() {
            window.location.href = 'history.html';
        });
    }

    // 查看 PDF 报告
    if (document.getElementById('view-pdf')) {
        document.getElementById('view-pdf').addEventListener('click', function() {
            window.open(userData.pdfPath, '_blank');
        });
    }

    // 显示历史记录
    if (document.getElementById('history-list')) {
        const historyList = document.getElementById('history-list');
        userData.history.forEach(record => {
            const li = document.createElement('li');
            li.textContent = record;
            historyList.appendChild(li);
        });
    }
});
