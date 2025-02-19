document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const addButton = document.getElementById('addUser');
    const blockList = document.getElementById('blockList');
  
    // 載入已封鎖的用戶列表
    function loadBlockedUsers() {
      chrome.storage.sync.get(['blockedUsers'], function(result) {
        const blockedUsers = result.blockedUsers || [];
        blockList.innerHTML = '';
        
        blockedUsers.forEach(user => {
          const userElement = document.createElement('div');
          userElement.className = 'blocked-user';
          userElement.innerHTML = `
            <span>${user}</span>
            <button class="remove-user" data-user="${user}">移除</button>
          `;
          blockList.appendChild(userElement);
        });
      });
    }
  
    // 新增封鎖用戶
    addButton.addEventListener('click', function() {
      const username = userInput.value.trim();
      if (!username) return;
  
      chrome.storage.sync.get(['blockedUsers'], function(result) {
        const blockedUsers = result.blockedUsers || [];
        if (!blockedUsers.includes(username)) {
          blockedUsers.push(username);
          chrome.storage.sync.set({ blockedUsers }, function() {
            loadBlockedUsers();
            userInput.value = '';
          });
        }
      });
    });
  
    // 移除封鎖用戶
    blockList.addEventListener('click', function(e) {
      if (e.target.classList.contains('remove-user')) {
        const username = e.target.dataset.user;
        chrome.storage.sync.get(['blockedUsers'], function(result) {
          const blockedUsers = result.blockedUsers || [];
          const updatedUsers = blockedUsers.filter(user => user !== username);
          chrome.storage.sync.set({ blockedUsers: updatedUsers }, function() {
            loadBlockedUsers();
          });
        });
      }
    });
  
    loadBlockedUsers();
  });