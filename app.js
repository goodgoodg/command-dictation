const STORAGE_KEY = "command-dictation-progress-v1";

const cards = [
  {
    id: "linux-pwd",
    mode: "linux",
    tag: "目录",
    answer: "pwd",
    prompt: "刚连上服务器，先确认自己现在在哪个目录。",
    meaning: "print working directory，确认当前所在位置。",
    hint: "三个字母，p 开头。",
  },
  {
    id: "linux-ls",
    mode: "linux",
    tag: "目录",
    answer: "ls",
    prompt: "想看看当前目录下面有哪些文件和文件夹。",
    meaning: "列出当前目录内容。",
    hint: "两个字母，像 list 的缩写。",
  },
  {
    id: "linux-ls-root",
    mode: "linux",
    tag: "目录",
    answer: "ls /",
    prompt: "想看看 Linux 最顶层目录下面有什么。",
    meaning: "/ 是根目录，不是详细信息参数。",
    hint: "命令后面跟一个根目录符号。",
  },
  {
    id: "linux-ls-long",
    mode: "linux",
    tag: "目录",
    answer: "ls -l",
    prompt: "想用详细列表查看当前目录内容。",
    meaning: "-l 是 long listing，能看到权限、大小、时间等。",
    hint: "注意是短横线，不是斜杠。",
  },
  {
    id: "linux-cd",
    mode: "linux",
    tag: "目录",
    answer: "cd /var/log",
    prompt: "想进入常见日志目录 /var/log。",
    meaning: "cd 用来切换目录。",
    hint: "change directory 的缩写。",
  },
  {
    id: "linux-mkdir",
    mode: "linux",
    tag: "文件",
    answer: "mkdir logs_bak",
    prompt: "准备备份日志，先创建一个 logs_bak 文件夹。",
    meaning: "mkdir 创建目录，不是创建普通文件。",
    hint: "make directory 的缩写。",
  },
  {
    id: "linux-touch",
    mode: "linux",
    tag: "文件",
    answer: "touch test.txt",
    prompt: "想创建一个空文件 test.txt。",
    meaning: "touch 常用来创建空文件或更新时间。",
    hint: "命令后面跟文件名。",
  },
  {
    id: "linux-cp",
    mode: "linux",
    tag: "备份",
    answer: "cp application.yml application.yml.bak",
    prompt: "改配置前，把 application.yml 复制一份备份。",
    meaning: "cp 旧文件 新文件，目标存在时可能覆盖。",
    hint: "copy 的缩写。",
  },
  {
    id: "linux-cpr",
    mode: "linux",
    tag: "备份",
    answer: "cp -r project project_bak",
    prompt: "改项目前，把整个 project 文件夹复制成 project_bak。",
    meaning: "-r 用来递归复制目录。",
    hint: "复制文件夹要加递归参数。",
  },
  {
    id: "linux-mv",
    mode: "linux",
    tag: "文件",
    answer: "mv old.txt new.txt",
    prompt: "把 old.txt 改名成 new.txt。",
    meaning: "mv 可以移动文件，也可以重命名。",
    hint: "move 的缩写。",
  },
  {
    id: "linux-rm",
    mode: "linux",
    tag: "文件",
    answer: "rm test.txt",
    prompt: "删除临时文件 test.txt。",
    meaning: "rm 删除要谨慎，工作里先确认路径。",
    hint: "remove 的缩写。",
  },
  {
    id: "linux-cat",
    mode: "linux",
    tag: "查看",
    answer: "cat app.log",
    prompt: "想直接查看 app.log 文件内容。",
    meaning: "cat 适合看小文件，大日志别直接全量打开。",
    hint: "三个字母，c 开头。",
  },
  {
    id: "linux-head",
    mode: "linux",
    tag: "查看",
    answer: "head app.log",
    prompt: "只想看 app.log 最前面的几行。",
    meaning: "head 查看文件开头。",
    hint: "和 tail 是一前一后。",
  },
  {
    id: "linux-tail",
    mode: "linux",
    tag: "查看",
    answer: "tail app.log",
    prompt: "只想看 app.log 最后几行。",
    meaning: "tail 查看文件末尾，日志排查很常用。",
    hint: "和 head 是一前一后。",
  },
  {
    id: "linux-tailf",
    mode: "linux",
    tag: "日志",
    answer: "tail -f app.log",
    prompt: "操作页面时，想实时盯着 app.log 新增日志。",
    meaning: "-f 会持续跟随文件变化。",
    hint: "tail 加一个 follow 参数。",
  },
  {
    id: "linux-grep",
    mode: "linux",
    tag: "日志",
    answer: "grep error app.log",
    prompt: "想从 app.log 里搜索 error 关键字。",
    meaning: "grep 用来按关键字过滤文本。",
    hint: "命令 + 关键字 + 文件名。",
  },
  {
    id: "linux-ps",
    mode: "linux",
    tag: "服务",
    answer: "ps -ef",
    prompt: "想查看服务器上正在运行的进程。",
    meaning: "ps 查看进程，排查服务是否启动时常用。",
    hint: "常见组合参数是 -ef。",
  },
  {
    id: "linux-top",
    mode: "linux",
    tag: "服务",
    answer: "top",
    prompt: "想实时看 CPU、内存和进程占用。",
    meaning: "top 是动态资源监控。",
    hint: "三个字母，t 开头。",
  },
  {
    id: "linux-netstat",
    mode: "linux",
    tag: "网络",
    answer: "netstat -tunlp",
    prompt: "想看服务器正在监听哪些端口。",
    meaning: "常用于确认服务端口是否起来。",
    hint: "netstat 加一串常见参数。",
  },
  {
    id: "linux-curl",
    mode: "linux",
    tag: "接口",
    answer: "curl http://localhost:8080",
    prompt: "想在服务器本机访问 8080 服务，看接口或页面是否有响应。",
    meaning: "curl 可以从命令行发起 HTTP 请求。",
    hint: "命令后面跟 URL。",
  },
  {
    id: "adb-devices",
    mode: "adb",
    tag: "设备",
    answer: "adb devices",
    prompt: "APP 测试前，先确认电脑识别到了手机或模拟器。",
    meaning: "列出已连接的 Android 设备。",
    hint: "adb 加 devices。",
  },
  {
    id: "adb-install",
    mode: "adb",
    tag: "安装",
    answer: "adb install app.apk",
    prompt: "把 app.apk 安装到连接的 Android 设备上。",
    meaning: "APP 测试里常用于安装测试包。",
    hint: "adb 加 install，再跟 apk 文件。",
  },
  {
    id: "adb-shell",
    mode: "adb",
    tag: "设备",
    answer: "adb shell",
    prompt: "想进入 Android 设备内部命令行。",
    meaning: "进入设备 shell 后可以继续查目录、进程等。",
    hint: "adb 后面跟 shell。",
  },
  {
    id: "adb-logcat",
    mode: "adb",
    tag: "日志",
    answer: "adb logcat",
    prompt: "APP 闪退时，想查看手机端实时日志。",
    meaning: "logcat 是 Android 日志排查核心命令。",
    hint: "adb 加一个日志相关单词。",
  },
  {
    id: "adb-pull",
    mode: "adb",
    tag: "文件",
    answer: "adb pull /sdcard/log.txt .",
    prompt: "把手机里的 /sdcard/log.txt 拉到当前电脑目录。",
    meaning: "pull 是从设备取文件到电脑。",
    hint: "方向是设备到电脑。",
  },
  {
    id: "adb-push",
    mode: "adb",
    tag: "文件",
    answer: "adb push test.txt /sdcard/",
    prompt: "把电脑当前目录的 test.txt 推到手机 /sdcard/。",
    meaning: "push 是从电脑传文件到设备。",
    hint: "方向是电脑到设备。",
  },
];

let state = {
  mode: "linux",
  current: null,
  streak: 0,
  total: 0,
  correct: 0,
  progress: {},
};

let deferredInstallPrompt = null;

const els = {
  scenarioText: document.querySelector("#scenarioText"),
  meaningText: document.querySelector("#meaningText"),
  cardTag: document.querySelector("#cardTag"),
  cardProgress: document.querySelector("#cardProgress"),
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  feedbackBox: document.querySelector("#feedbackBox"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackDetail: document.querySelector("#feedbackDetail"),
  streakValue: document.querySelector("#streakValue"),
  accuracyValue: document.querySelector("#accuracyValue"),
  masteredValue: document.querySelector("#masteredValue"),
  commandList: document.querySelector("#commandList"),
  speakButton: document.querySelector("#speakButton"),
  hintButton: document.querySelector("#hintButton"),
  skipButton: document.querySelector("#skipButton"),
  resetButton: document.querySelector("#resetButton"),
  installButton: document.querySelector("#installButton"),
  offlineStatus: document.querySelector("#offlineStatus"),
  segments: document.querySelectorAll(".segment"),
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    state = { ...state, ...JSON.parse(saved) };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function cardsForMode() {
  if (state.mode === "mixed") return cards;
  return cards.filter((card) => card.mode === state.mode);
}

function getProgress(cardId) {
  if (!state.progress[cardId]) {
    state.progress[cardId] = { seen: 0, correct: 0, wrong: 0, level: 0 };
  }
  return state.progress[cardId];
}

function pickNextCard() {
  const pool = cardsForMode();
  const scored = pool
    .map((card) => {
      const progress = getProgress(card.id);
      const score = progress.level * 6 + progress.correct * 2 - progress.wrong * 3 + progress.seen;
      return { card, score };
    })
    .sort((a, b) => a.score - b.score || a.card.answer.localeCompare(b.card.answer));

  if (scored.length === 1) return scored[0].card;

  const lowest = scored.slice(0, Math.min(5, scored.length));
  const filtered = lowest.filter((item) => item.card.id !== state.current?.id);
  const choices = filtered.length ? filtered : lowest;
  return choices[Math.floor(Math.random() * choices.length)].card;
}

function setCurrent(card) {
  state.current = card;
  const pool = cardsForMode();
  const index = pool.findIndex((item) => item.id === card.id) + 1;
  els.cardTag.textContent = card.tag;
  els.cardProgress.textContent = `${index} / ${pool.length}`;
  els.scenarioText.textContent = card.prompt;
  els.meaningText.textContent = card.meaning;
  els.answerInput.value = "";
  els.answerInput.placeholder = card.mode === "linux" ? "例如：pwd" : "例如：adb devices";
  els.answerInput.focus();
  renderList();
}

function normalize(value) {
  return value
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function isCorrect(value, card) {
  const normalized = normalize(value);
  const answers = [card.answer, ...(card.aliases || [])].map(normalize);
  return answers.includes(normalized);
}

function showFeedback(type, title, detail) {
  els.feedbackBox.className = `feedback ${type}`;
  els.feedbackTitle.textContent = title;
  els.feedbackDetail.textContent = detail;
}

function updateStats() {
  const pool = cardsForMode();
  const mastered = pool.filter((card) => getProgress(card.id).level >= 3).length;
  const accuracy = state.total ? Math.round((state.correct / state.total) * 100) : 0;
  els.streakValue.textContent = state.streak;
  els.accuracyValue.textContent = `${accuracy}%`;
  els.masteredValue.textContent = mastered;
}

function renderList() {
  const pool = cardsForMode();
  els.commandList.innerHTML = "";

  pool.forEach((card) => {
    const progress = getProgress(card.id);
    const item = document.createElement("div");
    item.className = "command-item";

    const name = document.createElement("span");
    name.className = "command-name";
    name.textContent = card.answer;

    const level = document.createElement("span");
    level.className = "command-level";
    level.textContent = `熟练度 ${Math.min(progress.level, 3)} / 3 · 对 ${progress.correct} · 错 ${progress.wrong}`;

    item.append(name, level);
    els.commandList.append(item);
  });

  updateStats();
}

function nextCard() {
  const card = pickNextCard();
  setCurrent(card);
  showFeedback("is-quiet", "下一题。", "先在脑子里想工作场景，再写命令。");
  saveState();
}

function submitAnswer(event) {
  event.preventDefault();
  const card = state.current;
  if (!card) return;

  const answer = els.answerInput.value;
  const progress = getProgress(card.id);
  progress.seen += 1;
  state.total += 1;

  if (isCorrect(answer, card)) {
    progress.correct += 1;
    progress.level = Math.min(3, progress.level + 1);
    state.correct += 1;
    state.streak += 1;
    showFeedback("is-correct", "答对了。", `${card.answer}：${card.meaning}`);
    saveState();
    renderList();
    window.setTimeout(() => {
      setCurrent(pickNextCard());
      saveState();
    }, 850);
    return;
  }

  progress.wrong += 1;
  progress.level = Math.max(0, progress.level - 1);
  state.streak = 0;
  showFeedback("is-wrong", "这题先记住场景。", `参考命令：${card.answer}`);
  saveState();
  renderList();
}

function speakCurrent() {
  const card = state.current;
  if (!card || !("speechSynthesis" in window)) {
    showFeedback("is-hint", "当前浏览器不支持朗读。", "可以直接看场景提示来默写命令。");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(card.prompt);
  utterance.lang = "zh-CN";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function showHint() {
  const card = state.current;
  if (!card) return;
  showFeedback("is-hint", card.hint, `答案格式接近：${maskAnswer(card.answer)}`);
}

function maskAnswer(answer) {
  return answer
    .split("")
    .map((char) => {
      if (char === " " || char === "/" || char === "." || char === "-") return char;
      return "_";
    })
    .join("");
}

function setMode(mode) {
  state.mode = mode;
  els.segments.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  setCurrent(pickNextCard());
  showFeedback("is-quiet", "已切换题库。", mode === "linux" ? "先练服务器命令。" : mode === "adb" ? "先练手机端命令。" : "混合练排查思路。");
  saveState();
}

function resetProgress() {
  state.progress = {};
  state.streak = 0;
  state.total = 0;
  state.correct = 0;
  setCurrent(pickNextCard());
  showFeedback("is-quiet", "进度已重置。", "从低熟练度题目重新开始。");
  saveState();
  renderList();
}

function updateOnlineStatus() {
  els.offlineStatus.textContent = navigator.onLine ? "在线可用" : "离线可用";
}

function bindEvents() {
  els.answerForm.addEventListener("submit", submitAnswer);
  els.speakButton.addEventListener("click", speakCurrent);
  els.hintButton.addEventListener("click", showHint);
  els.skipButton.addEventListener("click", nextCard);
  els.resetButton.addEventListener("click", resetProgress);
  els.segments.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installButton.classList.remove("is-hidden");
  });
  els.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    els.installButton.classList.add("is-hidden");
  });
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("service-worker.js");
  } catch {
    showFeedback("is-hint", "离线缓存暂未启用。", "用本地服务或 HTTPS 打开后会自动启用。");
  }
}

function init() {
  loadState();
  bindEvents();
  updateOnlineStatus();
  setMode(state.mode || "linux");
  registerServiceWorker();
}

init();
