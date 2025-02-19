# YouTube 評論封鎖插件

一個簡單的瀏覽器擴充功能，可以幫助你隱藏特定 YouTube 使用者的留言。

例如很常在Youtube評論區出現的張雅婷(插件預設已封鎖)

![image](https://github.com/Kashionz/youtube-comment-blocker/blob/main/getout.png)

## 功能特點

- 自動隱藏特定使用者的所有評論
- 預設封鎖張雅婷

## 檔案結構

```
youtube-comment-blocker/
  ├── manifest.json    # 擴充功能配置檔
  ├── popup.html      # 彈出視窗介面
  ├── popup.js        # 彈出視窗功能
  ├── content.js      # 主要功能邏輯
  ├── icon48.png      # 小圖示
  └── icon128.png     # 大圖示
```

## 安裝教學

### Chrome 瀏覽器

1. **準備檔案**
   - 下載Release區的壓縮檔案youtube-comment-blocker.zip
   - 解壓縮youtube-comment-blocker.zip

2. **開啟擴充功能頁面**
   - 在網址列輸入：`chrome://extensions/`
   - 或從選單進入：右上角選單（⋮）→ 更多工具 → 擴充功能

3. **開啟開發人員模式**
   - 找到頁面右上角的「開發人員模式」開關
   - 將開關切換為開啟狀態

4. **載入擴充功能**
   - 點擊「載入未封裝項目」
   - 選擇youtube-comment-blocker資料夾
   - 擴充功能會出現在清單中

### Edge 瀏覽器

1. **準備檔案**
   - 與 Chrome 步驟相同

2. **開啟擴充功能頁面**
   - 在網址列輸入：`edge://extensions/`
   - 或從選單進入：右上角選單（⋮）→ 擴充功能 → 管理擴充功能

3. **開啟開發人員模式**
   - 找到左側的「開發人員模式」開關
   - 將開關切換為開啟狀態

4. **載入擴充功能**
   - 點擊「載入解壓縮」
   - 選擇youtube-comment-blocker資料夾
   - 擴充功能會出現在清單中

## 使用方法

1. **安裝後設定**
   - 點擊瀏覽器右上角的擴充功能圖示
   - 可以選擇將圖示固定在工具列上

2. **新增封鎖用戶**
   - 點擊擴充功能圖示開啟控制面板
   - 在輸入框中輸入要封鎖的用戶名稱（包含 @ 符號）
   - 點擊「新增」按鈕或按下 Enter 鍵

3. **移除封鎖用戶**
   - 在封鎖清單中找到要移除的用戶
   - 點擊該用戶旁的「移除」按鈕
   - 確認移除操作

4. **預設封鎖用戶**
   - @張雅婷123 已預設加入封鎖清單
   - 無法移除

## 注意事項

- 安裝時出現的警告提示屬於正常現象
- 如果評論沒有立即隱藏，請重新整理頁面
- 修改程式碼後需要重新載入擴充功能
- 封鎖清單會自動同步到所有使用相同 Google 帳號的裝置

## 疑難排解

如果擴充功能無法正常運作：

1. 確認擴充功能已經啟用
2. 重新整理 YouTube 頁面
3. 在擴充功能頁面中重新載入擴充功能
4. 確認用戶名稱輸入格式正確（包含 @ 符號）
