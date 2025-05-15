const fs = require("fs");
const path = require("path");

const categories = {
  Images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  Documents: [".pdf", ".doc", ".docx", ".txt", ".xls", ".xlsx", ".ppt", ".pptx"],
  Videos: [".mp4", ".mkv", ".avi", ".mov", ".wmv"],
  Audio: [".mp3", ".wav", ".aac", ".flac"],
  Archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  Others: [] 
};

function getCategory(ext) {
  for (const category in categories) {
    if (categories[category].includes(ext)) {
      return category;
    }
  }
  return "Others";
}

async function organizeFiles(directory) {
    try {
      if (!fs.existsSync(directory)) {
        console.error("❌ Error: Directory does not exist -", directory);
        return;
      }
  
      const files = await fs.promises.readdir(directory);
      const report = [];
  
      for (const file of files) {
        const filePath = path.join(targetDirectory, file);
  
        const stats = await fs.promises.stat(filePath);
  
        if (stats.isDirectory() || file === path.basename(__filename)) {
          continue;
        }
  
        const ext = path.extname(file).toLowerCase();
        const category = getCategory(ext);
        const categoryPath = path.join(directory, category);
  
        if (!fs.existsSync(categoryPath)) {
          await fs.promises.mkdir(categoryPath);
        }
  
        const newFilePath = path.join(categoryPath, file);
        await fs.promises.rename(filePath, newFilePath);
  
        report.push(`✅ ${file} ➜ ${category}/`);
      }
  
      if (report.length) {
        console.log("📥 File organization complete:\n" + report.join("\n"));
      }
    } catch (error) {
      console.error("❌ Error organizing files:", error);
    }
  }
  
function watchDirectory(directory) {
  if (!fs.existsSync(directory)) {
    console.error("❌ Error: Directory does not exist -", directory);
    return;
  }

  console.log(`👀 Watching directory: ${directory} for new files...`);

  fs.watch(targetDirectory, (eventType, filename) => {
    if (filename && eventType === "rename") {
      const filePath = path.join(targetDirectory, filename); 
      if (fs.existsSync(filePath)) {
        console.log(`📥 New file detected: ${filename}`);
        organizeFiles(targetDirectory);
      }
    }
  });
  
}

const targetDirectory = "D:\\LEVELS\\Level 15\\Task-3\\my-app";

organizeFiles(targetDirectory);
watchDirectory(targetDirectory);
