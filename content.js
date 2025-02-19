function hideComments() {
    chrome.storage.sync.get(['blockedUsers'], function(result) {
      const blockedUsers = result.blockedUsers || [];
      
      // 找到所有評論作者連結
      const authorLinks = document.querySelectorAll('a#author-text');
      
      authorLinks.forEach(link => {
        const username = link.querySelector('span').textContent.trim();
        if (blockedUsers.includes(username)) {
          // 找到包含整個評論的父元素並隱藏
          const commentElement = link.closest('ytd-comment-thread-renderer');
          if (commentElement) {
            commentElement.style.display = 'none';
          }
        }
      });
    });
  }
  
  // 監聽 DOM 變化以處理動態載入的評論
  const observer = new MutationObserver(hideComments);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // 初始執行
  hideComments();