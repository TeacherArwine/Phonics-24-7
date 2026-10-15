
    const PHONICS_AUDIO_URL = 'audio/phonics.wav';
const LETTER_NAME_CLIPS = {"name-a": {"offset": 20.592, "duration": 0.52803125}, "name-f": {"offset": 21.12003125, "duration": 0.529}, "rolled-r": {"offset": 21.64903125, "duration": 0.727}};
    // British English: letter names and basic phonics are separate.
    const fullAZData = [
  {
    "key": "a",
    "letter": "Aa",
    "name": "A",
    "sound": "/eɪ/",
    "nameSpeech": "ae",
    "nameIPA": "/eɪ/",
    "example": "acorn",
    "nameRecorded": "name-a",
    "basicSoundRecorded": "name-a"
},
  {
    "key": "b",
    "letter": "Bb",
    "name": "B",
    "sound": "/b/",
    "nameSpeech": "bee",
    "nameIPA": "/biː/",
    "example": "bat"
  },
  {
    "key": "c",
    "letter": "Cc",
    "name": "C",
    "sound": "/k/",
    "nameSpeech": "see",
    "nameIPA": "/siː/",
    "example": "cat"
  },
  {
    "key": "d",
    "letter": "Dd",
    "name": "D",
    "sound": "/d/",
    "nameSpeech": "dee",
    "nameIPA": "/diː/",
    "example": "dog"
  },
  {
    "key": "e",
    "letter": "Ee",
    "name": "E",
    "sound": "/e/",
    "nameSpeech": "ee",
    "nameIPA": "/iː/",
    "example": "egg"
  },
  {
    "key": "f",
    "letter": "Ff",
    "name": "F",
    "sound": "/f/",
    "nameSpeech": "eff",
    "nameIPA": "/ef/",
    "example": "fish",
    "nameRecorded": "name-f"
},
  {
    "key": "g",
    "letter": "Gg",
    "name": "G",
    "sound": "/ɡ/",
    "nameSpeech": "gee",
    "nameIPA": "/dʒiː/",
    "example": "goat"
  },
  {
    "key": "h",
    "letter": "Hh",
    "name": "H",
    "sound": "/h/",
    "nameSpeech": "aitch",
    "nameIPA": "/eɪtʃ/",
    "example": "hat"
  },
  {
    "key": "i",
    "letter": "Ii",
    "name": "I",
    "sound": "/ɪ/",
    "nameSpeech": "eye",
    "nameIPA": "/aɪ/",
    "example": "sit"
  },
  {
    "key": "j",
    "letter": "Jj",
    "name": "J",
    "sound": "/dʒ/",
    "nameSpeech": "jay",
    "nameIPA": "/dʒeɪ/",
    "example": "jam"
  },
  {
    "key": "k",
    "letter": "Kk",
    "name": "K",
    "sound": "/k/",
    "nameSpeech": "kay",
    "nameIPA": "/keɪ/",
    "example": "kit"
  },
  {
    "key": "l",
    "letter": "Ll",
    "name": "L",
    "sound": "/l/",
    "nameSpeech": "ell",
    "nameIPA": "/el/",
    "example": "leg"
  },
  {
    "key": "m",
    "letter": "Mm",
    "name": "M",
    "sound": "/m/",
    "nameSpeech": "em",
    "nameIPA": "/em/",
    "example": "mat"
  },
  {
    "key": "n",
    "letter": "Nn",
    "name": "N",
    "sound": "/n/",
    "nameSpeech": "en",
    "nameIPA": "/en/",
    "example": "net"
  },
  {
    "key": "o",
    "letter": "Oo",
    "name": "O",
    "sound": "/ɒ/",
    "nameSpeech": "oh",
    "nameIPA": "/əʊ/",
    "example": "hot"
  },
  {
    "key": "p",
    "letter": "Pp",
    "name": "P",
    "sound": "/p/",
    "nameSpeech": "pee",
    "nameIPA": "/piː/",
    "example": "pen"
  },
  {
    "key": "q",
    "letter": "Qq",
    "name": "Q",
    "sound": "/kw/",
    "nameSpeech": "cue",
    "nameIPA": "/kjuː/",
    "example": "queen"
  },
  {
    "key": "r",
    "letter": "Rr",
    "name": "R",
    "sound": "/r/",
    "nameSpeech": "are",
    "nameIPA": "/ɑː/",
    "example": "red",
    "basicSoundRecorded": "rolled-r"
},
  {
    "key": "s",
    "letter": "Ss",
    "name": "S",
    "sound": "/s/",
    "nameSpeech": "ess",
    "nameIPA": "/es/",
    "example": "sun"
  },
  {
    "key": "t",
    "letter": "Tt",
    "name": "T",
    "sound": "/t/",
    "nameSpeech": "tee",
    "nameIPA": "/tiː/",
    "example": "ten"
  },
  {
    "key": "u",
    "letter": "Uu",
    "name": "U",
    "sound": "/ʌ/",
    "nameSpeech": "you",
    "nameIPA": "/juː/",
    "example": "cup"
  },
  {
    "key": "v",
    "letter": "Vv",
    "name": "V",
    "sound": "/v/",
    "nameSpeech": "vee",
    "nameIPA": "/viː/",
    "example": "van"
  },
  {
    "key": "w",
    "letter": "Ww",
    "name": "W",
    "sound": "/w/",
    "nameSpeech": "double you",
    "nameIPA": "/ˈdʌbəl juː/",
    "example": "wet"
  },
  {
    "key": "x",
    "letter": "Xx",
    "name": "X",
    "sound": "/ks/",
    "nameSpeech": "ex",
    "nameIPA": "/eks/",
    "example": "box"
  },
  {
    "key": "y",
    "letter": "Yy",
    "name": "Y",
    "sound": "/j/",
    "nameSpeech": "why",
    "nameIPA": "/waɪ/",
    "example": "yes"
  },
  {
    "key": "z",
    "letter": "Zz",
    "name": "Z",
    "sound": "/z/",
    "nameSpeech": "zed",
    "nameIPA": "/zed/",
    "example": "zip"
  }
];

    // 50 Perkataan CVC & Suku Kata
    const wordsList = [
      // 15 One Syllable CVC
      { word: 'cat', syl: 1, parts: ['c', 'a', 't'], display: 'c – a – t ➔ CAT' },
      { word: 'hat', syl: 1, parts: ['h', 'a', 't'], display: 'h – a – t ➔ HAT' },
      { word: 'mat', syl: 1, parts: ['m', 'a', 't'], display: 'm – a – t ➔ MAT' },
      { word: 'rat', syl: 1, parts: ['r', 'a', 't'], display: 'r – a – t ➔ RAT' },
      { word: 'pen', syl: 1, parts: ['p', 'e', 'n'], display: '/p/ – /e/ – /n/ ➔ PEN' },
      { word: 'pet', syl: 1, parts: ['p', 'e', 't'], display: '/p/ – /e/ – /t/ ➔ PET' },
      { word: 'red', syl: 1, parts: ['r', 'e', 'd'], display: '/r/ – /e/ – /d/ ➔ RED' },
      { word: 'ten', syl: 1, parts: ['t', 'e', 'n'], display: '/t/ – /e/ – /n/ ➔ TEN' },
      { word: 'bin', syl: 1, parts: ['b', 'i', 'n'], display: '/b/ – /ɪ/ – /n/ ➔ BIN' },
      { word: 'fin', syl: 1, parts: ['f', 'i', 'n'], display: '/f/ – /ɪ/ – /n/ ➔ FIN' },
      { word: 'pin', syl: 1, parts: ['p', 'i', 'n'], display: '/p/ – /ɪ/ – /n/ ➔ PIN' },
      { word: 'dog', syl: 1, parts: ['d', 'o', 'g'], display: '/d/ – /ɒ/ – /ɡ/ ➔ DOG' },
      { word: 'log', syl: 1, parts: ['l', 'o', 'g'], display: '/l/ – /ɒ/ – /ɡ/ ➔ LOG' },
      { word: 'bus', syl: 1, parts: ['b', 'u', 's'], display: '/b/ – /ʌ/ – /s/ ➔ BUS' },
      { word: 'cup', syl: 1, parts: ['c', 'u', 'p'], display: '/k/ – /ʌ/ – /p/ ➔ CUP' },

      // 20 Two Syllables
      { word: 'rabbit', syl: 2, parts: ['rab', 'bit'], display: 'rab - bit ➔ RABBIT' },
      { word: 'kitten', syl: 2, parts: ['kit', 'ten'], display: 'kit - ten ➔ KITTEN' },
      { word: 'puppy', syl: 2, parts: ['pup', 'py'], display: 'pup - py ➔ PUPPY' },
      { word: 'sunset', syl: 2, parts: ['sun', 'set'], display: 'sun - set ➔ SUNSET' },
      { word: 'picnic', syl: 2, parts: ['pic', 'nic'], display: 'pic - nic ➔ PICNIC' },
      { word: 'magnet', syl: 2, parts: ['mag', 'net'], display: 'mag - net ➔ MAGNET' },
      { word: 'basket', syl: 2, parts: ['bas', 'ket'], display: 'bas - ket ➔ BASKET' },
      { word: 'helmet', syl: 2, parts: ['hel', 'met'], display: 'hel - met ➔ HELMET' },
      { word: 'tennis', syl: 2, parts: ['ten', 'nis'], display: 'ten - nis ➔ TENNIS' },
      { word: 'muffin', syl: 2, parts: ['muf', 'fin'], display: 'muf - fin ➔ MUFFIN' },
      { word: 'ribbon', syl: 2, parts: ['rib', 'bon'], display: 'rib - bon ➔ RIBBON' },
      { word: 'cotton', syl: 2, parts: ['cot', 'ton'], display: 'cot - ton ➔ COTTON' },
      { word: 'napkin', syl: 2, parts: ['nap', 'kin'], display: 'nap - kin ➔ NAPKIN' },
      { word: 'summit', syl: 2, parts: ['sum', 'mit'], display: 'sum - mit ➔ SUMMIT' },
      { word: 'combat', syl: 2, parts: ['com', 'bat'], display: 'com - bat ➔ COMBAT' },
      { word: 'pocket', syl: 2, parts: ['poc', 'ket'], display: 'poc - ket ➔ POCKET' },
      { word: 'ticket', syl: 2, parts: ['tic', 'ket'], display: 'tic - ket ➔ TICKET' },
      { word: 'racket', syl: 2, parts: ['rac', 'ket'], display: 'rac - ket ➔ RACKET' },
      { word: 'window', syl: 2, parts: ['win', 'dow'], display: 'win - dow ➔ WINDOW' },
      { word: 'yellow', syl: 2, parts: ['yel', 'low'], display: 'yel - low ➔ YELLOW' },

      // 15 Three Syllables
      { word: 'elephant', syl: 3, parts: ['el', 'e', 'phant'], display: 'el - e - phant ➔ ELEPHANT' },
      { word: 'dinosaur', syl: 3, parts: ['di', 'no', 'saur'], display: 'di - no - saur ➔ DINOSAUR' },
      { word: 'octopus', syl: 3, parts: ['oc', 'to', 'pus'], display: 'oc - to - pus ➔ OCTOPUS' },
      { word: 'hospital', syl: 3, parts: ['hos', 'pi', 'tal'], display: 'hos - pi - tal ➔ HOSPITAL' },
      { word: 'umbrella', syl: 3, parts: ['um', 'brel', 'la'], display: 'um - brel - la ➔ UMBRELLA' },
      { word: 'badminton', syl: 3, parts: ['bad', 'min', 'ton'], display: 'bad - min - ton ➔ BADMINTON' },
      { word: 'holiday', syl: 3, parts: ['hol', 'i', 'day'], display: 'hol - i - day ➔ HOLIDAY' },
      { word: 'confident', syl: 3, parts: ['con', 'fi', 'dent'], display: 'con - fi - dent ➔ CONFIDENT' },
      { word: 'fantastic', syl: 3, parts: ['fan', 'tas', 'tic'], display: 'fan - tas - tic ➔ FANTASTIC' },
      { word: 'hamburger', syl: 3, parts: ['ham', 'bur', 'ger'], display: 'ham - bur - ger ➔ HAMBURGER' },
      { word: 'cucumber', syl: 3, parts: ['cu', 'cum', 'ber'], display: 'cu - cum - ber ➔ CUCUMBER' },
      { word: 'animal', syl: 3, parts: ['an', 'i', 'mal'], display: 'an - i - mal ➔ ANIMAL' },
      { word: 'volcano', syl: 3, parts: ['vol', 'ca', 'no'], display: 'vol - ca - no ➔ VOLCANO' },
      { word: 'banana', syl: 3, parts: ['ba', 'na', 'na'], display: 'ba - na - na ➔ BANANA' },
      { word: 'character', syl: 3, parts: ['char', 'ac', 'ter'], display: 'char - ac - ter ➔ CHARACTER' }
    ];

    // 50 Ayat Mudah
    const sentencesList = [
      "A red bus.", "A fat cat.", "A big dog.", "I sit on a mat.", "A rat in a bin.",
      "The ten pens.", "A cute pet.", "A hot cup.", "A wet log.", "A red pin.",
      "A cute rabbit.", "A little kitten.", "A happy puppy.", "A nice picnic.", "A yellow ribbon.",
      "A fast rocket.", "A big basket.", "A red helmet.", "A soft muffin.", "A blue ticket.",
      "An elephant in the zoo.", "A green dinosaur.", "A big octopus.", "A clean hospital.", "A red umbrella.",
      "I play badminton.", "A pelican on a log.", "A tasty hamburger.", "A yellow sun.",
      "I see a cat.", "The dog can run.", "I have a pen.", "A hat on the mat.", "The sun is hot.",
      "A pig in the mud.", "He has a cap.", "She has a bag.", "Look at the bus.", "A cup of tea.",
      "I like the dog.", "The cat is red.", "A man in a van.", "The bug is on a rug.", "I can hop.",
      "A red apple.", "The net is big.", "A fox in a box.", "I can swim.", "A sweet banana."
    ];

    const havocColors = ['hv-pink', 'hv-blue', 'hv-green', 'hv-orange', 'hv-purple', 'hv-yellow'];

    // Embedded phonics: Yellow Door A–Z; a, l, n, r use Oxford Owl; f uses Cambridge Dictionary.
    // Original audio: https://www.yellow-door.net/file-downloads/Phonic_letter_sounds.mp3
    // Original letters start at two-second intervals; silent gaps were shortened
    // into a PCM WAV sprite with one letter every 0.8 seconds. Play recordings,
    // never invented spellings or IPA through the browser's text-to-speech engine.
    let phonicsContext = null;
    let phonicsBufferPromise = null;
    let contextResumePromise = null;
    let playbackController = null;
    let activeUtterance = null;

    function audioStatus(message, isError = false) {
      const status = document.getElementById('audioStatus');
      status.textContent = message;
      status.classList.toggle('audio-error', isError);
    }

    function aborted() {
      return new DOMException('Playback cancelled', 'AbortError');
    }

    function checkPlayback(signal) {
      if (signal.aborted) throw aborted();
    }

    function stopAllAudio(showStatus = true) {
      if (playbackController) playbackController.abort();
      playbackController = null;
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      activeUtterance = null;
      document.querySelectorAll('.is-speaking').forEach(el => el.classList.remove('is-speaking'));
      if (showStatus) audioStatus('Audio dihentikan. Pilih huruf atau perkataan.');
    }

    function getPhonicsContext() {
      const Context = window.AudioContext || window.webkitAudioContext;
      if (!Context) throw new Error('Audio tidak disokong. Buka fail ini dalam Chrome, Edge, Safari atau Firefox.');
      if (!phonicsContext || phonicsContext.state === 'closed') {
        phonicsContext = new Context();
        phonicsBufferPromise = null;
      }
      return phonicsContext;
    }

    function startPlayback(action, label, element) {
      stopAllAudio(false);
      const controller = new AbortController();
      const signal = controller.signal;
      playbackController = controller;
      // Resume within the click/keyboard gesture, including before a spoken name.
      try {
        const context = getPhonicsContext();
        contextResumePromise = context.resume().catch(() => {});
      } catch (_) {
        contextResumePromise = Promise.resolve();
      }
      if (element) element.classList.add('is-speaking');
      audioStatus(label);
      return Promise.resolve().then(() => {
        checkPlayback(signal);
        return action(signal);
      }).then(notice => {
        if (!signal.aborted) audioStatus(notice || 'Sedia. Tekan sekali lagi untuk ulang.');
      }).catch(error => {
        if (!signal.aborted && error.name !== 'AbortError') {
          audioStatus(error.message || 'Audio tidak dapat dimainkan. Cuba tekan sekali lagi.', true);
        }
      }).finally(() => {
        if (playbackController === controller) {
          if (element) element.classList.remove('is-speaking');
          playbackController = null;
        }
      });
    }

    function playbackPause(ms, signal) {
      checkPlayback(signal);
      return new Promise((resolve, reject) => {
        const cancel = () => {
          clearTimeout(timer);
          signal.removeEventListener('abort', cancel);
          reject(aborted());
        };
        const timer = setTimeout(() => {
          signal.removeEventListener('abort', cancel);
          resolve();
        }, ms);
        signal.addEventListener('abort', cancel, { once: true });
      });
    }

    async function getPhonicsBuffer() {
      const context = getPhonicsContext();
      if (!phonicsBufferPromise) {
        phonicsBufferPromise = fetch(PHONICS_AUDIO_URL)
          .then(response => {
            if (!response.ok) throw new Error(`Audio HTTP ${response.status}`);
            return response.arrayBuffer();
          })
          .then(buffer => context.decodeAudioData(buffer))
          .catch(() => {
            phonicsBufferPromise = null;
            throw new Error('Rakaman fonik tidak dapat dibaca. Cuba muat semula halaman.');
          });
      }
      return phonicsBufferPromise;
    }

    async function playPhoneme(letter, signal) {
      checkPlayback(signal);
      const nameClip = LETTER_NAME_CLIPS[letter];
      const index = 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter.toLowerCase());
      if (!nameClip && (index < 0 || letter.length !== 1)) throw new Error('Bunyi huruf tidak ditemui.');
      await contextResumePromise;
      checkPlayback(signal);
      const context = getPhonicsContext();
      const buffer = await getPhonicsBuffer();
      checkPlayback(signal);
      if (context.state !== 'running') throw new Error('Tekan butang Bunyi sekali lagi untuk mengaktifkan audio.');
      const offset = nameClip ? nameClip.offset : index * 0.8;
      const duration = Math.min(nameClip ? nameClip.duration : 0.8, (nameClip ? buffer.duration : 20.592) - offset);
      if (duration <= 0) throw new Error('Rakaman huruf tidak lengkap.');
      return new Promise((resolve, reject) => {
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        const clean = () => {
          source.onended = null;
          signal.removeEventListener('abort', cancel);
          source.disconnect();
        };
        const cancel = () => {
          clean();
          try { source.stop(); } catch (_) {}
          reject(aborted());
        };
        source.onended = () => { clean(); resolve(); };
        signal.addEventListener('abort', cancel, { once: true });
        try {
          source.start(0, offset, duration);
        } catch (error) {
          clean();
          reject(error);
        }
      });
    }

    function getClearVoice() {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices();
      return voices.find(v => /^en[-_]GB$/i.test(v.lang)) ||
        voices.find(v => /^en([-_]|$)/i.test(v.lang)) || null;
    }

    function updateVoiceLabel() {
      const voice = getClearVoice();
      document.getElementById('voiceInfo').textContent = voice
        ? `Suara nama huruf & perkataan: ${voice.name} (${voice.lang}).`
        : 'Nama huruf & perkataan memerlukan suara English pada peranti.';
    }

    async function waitForVoices(signal) {
      checkPlayback(signal);
      if (!('speechSynthesis' in window)) {
        throw new Error('Suara nama huruf dan perkataan tidak disokong. Butang Bunyi masih boleh digunakan.');
      }
      const synth = window.speechSynthesis;
      if (synth.getVoices().length) return;
      await new Promise((resolve, reject) => {
        const clean = () => {
          clearTimeout(timer);
          synth.removeEventListener('voiceschanged', changed);
          signal.removeEventListener('abort', cancel);
        };
        const finish = () => { clean(); resolve(); };
        const changed = () => { if (synth.getVoices().length) finish(); };
        const cancel = () => { clean(); reject(aborted()); };
        const timer = setTimeout(finish, 1500);
        synth.addEventListener('voiceschanged', changed);
        signal.addEventListener('abort', cancel, { once: true });
        changed();
      });
    }

    function getSentenceVoice() {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang));
      const childVoices = voices.filter(v => /\b(child|children|kid|kids|junior|young)\b/i.test(v.name));
      return childVoices.find(v => /^en[-_]GB$/i.test(v.lang)) || childVoices[0] || getClearVoice();
    }

    async function sayEnglish(text, signal, rate = 0.85, voiceMode = 'default') {
      await waitForVoices(signal);
      checkPlayback(signal);
      const synth = window.speechSynthesis;
      const voice = voiceMode === 'sentence' ? getSentenceVoice() : getClearVoice();
      if (!voice) throw new Error('Suara English belum tersedia. Aktifkan suara English pada peranti; butang Bunyi boleh digunakan terus.');
      return new Promise((resolve, reject) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.lang = voice.lang;
        utterance.pitch = 1;
        utterance.rate = rate;
        utterance.volume = 1;
        activeUtterance = utterance;
        const clean = () => {
          clearTimeout(timer);
          signal.removeEventListener('abort', cancel);
          utterance.onend = null;
          utterance.onerror = null;
          if (activeUtterance === utterance) activeUtterance = null;
        };
        const cancel = () => { clean(); reject(aborted()); };
        const timer = setTimeout(() => {
          clean();
          synth.cancel();
          reject(new Error('Suara belum memberi respons. Tekan sekali lagi atau gunakan butang Bunyi.'));
        }, Math.max(12000, text.length * 250 / Math.min(rate, 1)));
        utterance.onend = () => { clean(); resolve(); };
        utterance.onerror = () => {
          clean();
          reject(new Error('Suara English tidak dapat dimainkan. Semak suara peranti dan cuba lagi.'));
        };
        signal.addEventListener('abort', cancel, { once: true });
        try {
          if (synth.paused) synth.resume();
          synth.speak(utterance);
        } catch (error) {
          clean();
          reject(error);
        }
      });
    }

    function speakSound(textToSpeak) {
      return startPlayback(signal => sayEnglish(textToSpeak, signal), `🔊 ${textToSpeak}`);
    }

    function speakSentence(textToSpeak) {
      return startPlayback(signal => sayEnglish(textToSpeak, signal, 0.65, 'sentence'), `🔊 Bacaan perlahan: ${textToSpeak}`);
    }

    function playLetter(index, mode = 'both', element) {
      const item = fullAZData[index];
      return startPlayback(async signal => {
        let notice = '';
        if (mode !== 'sound') {
          try {
            // Standard English letter names. These are never used as phonemes.
            if (item.nameRecorded) {
              await playPhoneme(item.nameRecorded, signal);
            } else {
              await sayEnglish(item.nameSpeech, signal, 0.85);
            }
          } catch (error) {
            if (error.name === 'AbortError' || mode === 'name') throw error;
            notice = 'Bunyi fonik dimainkan. Nama huruf memerlukan suara English pada peranti.';
          }
          if (mode === 'both' && !notice) await playbackPause(500, signal);
        }
        if (mode !== 'name') await playPhoneme(item.basicSoundRecorded || item.key, signal);
        return notice;
      }, `🔊 ${mode === 'name' ? 'Nama' : mode === 'sound' ? 'Bunyi' : 'Nama dan bunyi'} ${item.name}`, element);
    }

    function blendSoundKey(letter) {
      return letter.toLowerCase() === 'a' ? 'name-a' : letter;
    }
    function playSinglePhoneme(letter, element) {
      return startPlayback(signal => playPhoneme(blendSoundKey(letter), signal), `🔊 Bunyi ${letter}`, element);
    }

    function playSequence(word, element) {
      const item = wordsList.find(entry => entry.word === word);
      if (!item) return;
      return startPlayback(async signal => {
        if (item.syl === 1) {
          for (let index = 0; index < item.parts.length; index++) {
            await playPhoneme(blendSoundKey(item.parts[index]), signal);
            await playbackPause(index === item.parts.length - 1 ? 350 : 180, signal);
          }
        }
        // Whole words retain their natural stress and weak vowels. Artificial
        // syllable spellings such as "keet", "neek" or "meen" are never spoken.
        await sayEnglish(item.word, signal);
      }, `🔊 ${item.syl === 1 ? 'Gabung bunyi' : 'Perkataan'}: ${item.word}`, element);
    }

    function playVictoryChimeSound() {
      try {
        const context = getPhonicsContext();
        context.resume().catch(() => {});
        [523.25, 659.25, 783.99, 1046.50].forEach((frequency, index) => {
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          const start = context.currentTime + index * 0.12;
          oscillator.type = 'triangle';
          oscillator.frequency.setValueAtTime(frequency, start);
          gain.gain.setValueAtTime(0.18, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
          oscillator.connect(gain);
          gain.connect(context.destination);
          oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
          oscillator.start(start);
          oscillator.stop(start + 0.35);
        });
      } catch (_) {}
    }


    function triggerWowEffect() {
      playVictoryChimeSound();

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.6 }
        });
      }

      const card = document.getElementById('hubCard');
      card.classList.add('wow-effect');
      setTimeout(() => {
        card.classList.remove('wow-effect');
      }, 1500);
    }

    // A–Z: main card plays name, a half-second pause, then the recorded sound.
    const l1Container = document.getElementById('level1Container');
    fullAZData.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `card-az letter-card ${havocColors[index % havocColors.length]}`;
      const main = document.createElement('button');
      main.type = 'button';
      main.className = 'letter-main';
      main.setAttribute('aria-label', `Nama dan bunyi huruf ${item.name}`);
      main.onclick = () => playLetter(index, 'both', card);
      main.innerHTML = `<span class="word letter-pair" lang="en">${item.letter}</span>
        <span class="syllable-tag">${item.key === 'q' ? 'qu' : 'Bunyi'}: ${item.sound}</span>
        <span class="letter-example" lang="en">${item.example}</span>`;
      const actions = document.createElement('div');
      actions.className = 'letter-actions';
      [['Nama', 'name'], ['Bunyi', 'sound']].forEach(([label, mode]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = label;
        button.setAttribute('aria-label', `${label} huruf ${item.name}`);
        button.onclick = () => playLetter(index, mode, card);
        actions.appendChild(button);
      });
      card.append(main, actions);
      l1Container.appendChild(card);
    });

    function renderBlendDisplay(sylFilter = 'all') {
      const area = document.getElementById('blendDisplayArea');
      area.innerHTML = '';
      const items = sylFilter === 'all' ? wordsList : wordsList.filter(item => item.syl === sylFilter);
      items.forEach(item => {
        const wrap = document.createElement('div');
        wrap.className = 'blend-row';
        const display = document.createElement('div');
        display.className = 'blend-display';
        item.parts.forEach((part, index) => {
          if (index) {
            const plus = document.createElement('span');
            plus.className = 'blend-plus';
            plus.textContent = '+';
            plus.setAttribute('aria-hidden', 'true');
            display.appendChild(plus);
          }
          const box = document.createElement(item.syl === 1 ? 'button' : 'span');
          box.className = 'blend-box hv-yellow';
          box.textContent = part;
          box.lang = 'en';
          if (item.syl === 1) {
            box.type = 'button';
            box.setAttribute('aria-label', `Dengar bunyi ${part}`);
            box.onclick = () => playSinglePhoneme(part, box);
          } else {
            box.classList.add('syllable-display');
          }
          display.appendChild(box);
        });
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'play-audio-btn';
        button.textContent = item.syl === 1 ? '🔊 Dengar Gabungan Bunyi' : '🔊 Dengar Perkataan Penuh';
        button.onclick = () => playSequence(item.word, button);
        const result = document.createElement('div');
        result.className = 'result-box';
        result.textContent = item.display;
        wrap.append(display, button, result);
        if (item.syl > 1) {
          const note = document.createElement('p');
          note.className = 'blend-note';
          note.textContent = 'Lihat pecahan suku kata. Dengar sebutan perkataan penuh.';
          wrap.appendChild(note);
        }
        area.appendChild(wrap);
      });
    }


    function filterBlend(syl, btn) {
      stopAllAudio();
      document.querySelectorAll('#blendTab .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBlendDisplay(syl);
    }

    // Render Perkataan CVC
    function renderWords(filterSyl = 'all') {
      const wContainer = document.getElementById('wordsContainer');
      wContainer.innerHTML = '';
      
      const filtered = filterSyl === 'all' ? wordsList : wordsList.filter(w => w.syl === filterSyl);

      filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `card-az ${havocColors[index % havocColors.length]}`;
        card.onclick = () => { speakSound(item.word); };
        card.innerHTML = `<div class="word">${item.word}</div><div class="syllable-tag">${item.syl} Suku Kata</div>`;
        wContainer.appendChild(card);
      });
    }

    function filterWords(syl, btn) {
      stopAllAudio();
      document.querySelectorAll('#wordsTab .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWords(syl);
    }

    // Render 50 Ayat Mudah
    const sentenceContainer = document.getElementById('sentenceContainer');
    sentencesList.forEach((st, index) => {
      const card = document.createElement('div');
      card.className = `card-sentence ${havocColors[index % havocColors.length]}`;
      card.onclick = () => { speakSentence(st); };
      card.innerHTML = `<div class="sentence-text">${st}</div>`;
      sentenceContainer.appendChild(card);
    });

    // Kuiz Ejaan
    let currentQuizIdx = 0;
    let userSpelling = [];

    function initQuizGame() {
      const targetObj = wordsList[currentQuizIdx];
      const targetWord = targetObj.word.toUpperCase();
      userSpelling = [];
      document.getElementById('quizFeedback').innerText = '';
      document.getElementById('quizCounter').innerText = `Soalan ${currentQuizIdx + 1} / ${wordsList.length}`;

      const slotsContainer = document.getElementById('spellingSlots');
      slotsContainer.innerHTML = '';
      for (let i = 0; i < targetWord.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        slot.id = `slot-${i}`;
        slotsContainer.appendChild(slot);
      }

      const poolContainer = document.getElementById('letterPool');
      poolContainer.innerHTML = '';
      let letters = targetWord.split('');
      const extraLetters = ['A', 'E', 'I', 'O', 'U', 'S', 'T', 'P'];
      letters.push(extraLetters[Math.floor(Math.random() * extraLetters.length)]);
      letters.sort(() => Math.random() - 0.5);

      letters.forEach((char) => {
        const btn = document.createElement('button');
        btn.className = 'tile-btn';
        btn.innerText = char;
        btn.onclick = () => { selectLetterTile(btn, char); };
        poolContainer.appendChild(btn);
      });

      playQuizAudio();
    }

    function playQuizAudio() {
      speakSound(wordsList[currentQuizIdx].word);
    }

    function selectLetterTile(btn, char) {
      const targetWord = wordsList[currentQuizIdx].word.toUpperCase();
      if (userSpelling.length < targetWord.length) {
        userSpelling.push(char);
        document.getElementById(`slot-${userSpelling.length - 1}`).innerText = char;
        btn.style.visibility = 'hidden';

        if (userSpelling.length === targetWord.length) {
          checkSpellingAnswer();
        }
      }
    }

    function checkSpellingAnswer() {
      const targetWord = wordsList[currentQuizIdx].word.toUpperCase();
      const fb = document.getElementById('quizFeedback');
      if (userSpelling.join('') === targetWord) {
        fb.innerText = '🌈 WOW! EJAAN BETUL! 🎉';
        fb.style.color = '#000000';
        triggerWowEffect();
      } else {
        fb.innerText = '❌ Cuba lagi!';
        fb.style.color = '#000000';
      }
    }

    function resetSpelling() {
      initQuizGame();
    }

    function nextQuizQuestion() {
      currentQuizIdx = (currentQuizIdx + 1) % wordsList.length;
      initQuizGame();
    }

    function prevQuizQuestion() {
      currentQuizIdx = (currentQuizIdx - 1 + wordsList.length) % wordsList.length;
      initQuizGame();
    }

    function switchTab(evt, tabId) {
      stopAllAudio(false);
      audioStatus('Sedia. Pilih huruf atau perkataan.');
      const tabContents = document.getElementsByClassName('tab-content');
      for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
      }

      const tabBtns = document.getElementsByClassName('tab-btn');
      for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
      }

      document.getElementById(tabId).classList.add('active');
      evt.currentTarget.classList.add('active');

      if (tabId === 'blendTab') {
        document.querySelectorAll('#blendTab .filter-btn').forEach((button, index) => button.classList.toggle('active', index === 0));
        renderBlendDisplay('all');
      }
      if (tabId === 'quizTab') initQuizGame();
    }

    // Inisialisasi
    renderWords('all');
    renderBlendDisplay('all');

    updateVoiceLabel();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', updateVoiceLabel);
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAllAudio(false);
    });
    window.addEventListener('pagehide', () => stopAllAudio(false));
