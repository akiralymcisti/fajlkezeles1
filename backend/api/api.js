const express = require('express');
const router = express.Router();
const database = require('../sql/database.js');
const fs = require('fs/promises');

//!Multer
const multer = require('multer'); //?npm install multer
const path = require('path');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename: (request, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); //?egyedi név: dátum - file eredeti neve
    }
});

const upload = multer({ storage });

//!Endpoints:
//?GET /api/test
router.get('/test', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});

//?GET /api/testsql
router.get('/testsql', async (request, response) => {
    try {
        const selectall = await database.selectall();
        response.status(200).json({
            message: 'Ez a végpont működik.',
            results: selectall
        });
    } catch (error) {
        response.status(500).json({
            message: 'Ez a végpont nem működik.'
        });
    }
});

// 1. Feladat
const readTextFile = async (filePath) => {
    try {
      const text = await fs.readFile(filePath, 'utf8');
      return text; // string
    } catch (error) {
      throw new Error(`Olvasási hiba (text): ${error.message}`);
    }
  };

  router.get('/readfile', async (request, response) => {
    try {
      const content = await readTextFile(path.join(__dirname, ('../files/adatok.txt')));
      response.status(200).json({ content: content });
    } catch (error) {
      console.log('GET /api/read-text error:', error);
      response.status(500).json({ error: 'Internal server error' });
    }
  });

  //2. Feladat
  router.get('/beolvasas', async (request, response) => {
    try {
        const content = await readTextFile(path.join(__dirname, ('../files/szamok.txt')));
        response.status(200).json({ content: content });
      } catch (error) {
        console.log('GET /api/read-text error:', error);
        response.status(500).json({ error: 'Internal server error' });
      }
  })

  router.get('/osszeg', async (request, response) => {
    try {
        const content = await readTextFile(path.join(__dirname, '../files/szamok.txt'));

        let numbers = content.split(',');
        let osszeg = 0;
        for (const item of numbers) {
            osszeg += parseInt(item);
        }

        response.status(200).json({
            result: osszeg
        });
    }
    catch (error) {
        console.log('GET /api/readFile error:', error);
        response.status(500).json({
            error: 'Szerver hiba'
        });
    }
  })

    router.get('/atlag', async (request, response) => {
    try {
        const content = await readTextFile(path.join(__dirname, '../files/szamok.txt'));
        let numbers = content.split(',');
        let osszeg = 0;
        for (const item of numbers) {
            osszeg += parseInt(item);
        }
        let atlag = osszeg / numbers.length;
        response.status(200).json({
            result: atlag
        });
    }
    catch (error) {
        console.log('GET /api/readFile error:', error);
        response.status(500).json({
            error: 'Szerver hiba'
        });
      }
    });

    router.get('/min', async (request, response) => {
    try {
        const content = await readTextFile(path.join(__dirname, '../files/szamok.txt'));  
        let numbers = content.split(',');
        let min = Math.min(...numbers.map(Number));
        response.status(200).json({
            result: min
        });
    } catch (error) {
        console.log('GET /api/readFile error:', error);
        response.status(500).json({
            error: 'Szerver hiba'
        });
      }
    });

    router.get('/max', async (request, response) => {
    try {
        const content = await readTextFile(path.join(__dirname, '../files/szamok.txt'));
        let numbers = content.split(',');
        let max = Math.max(...numbers.map(Number));
        response.status(200).json({
            result: max
        });
    } catch (error) {
        console.log('GET /api/readFile error:', error);
        response.status(500).json({
            error: 'Szerver hiba'
        });
      } 
    });

  // 3. Feladat
    

    
  
  

module.exports = router;
