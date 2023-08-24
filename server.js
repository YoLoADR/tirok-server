const express = require('express');
const { faker } = require('@faker-js/faker');
const pool = require('./database');

const app = express();
const PORT = 3000;

app.get('/populate', async (req, res) => {
    // Ajout des utilisateurs fictifs
    const users = [
      { name: 'Hilary', role: 'Investisseur' },
      { name: 'Fabien', role: 'Investisseur' },
      { name: 'Yohann', role: 'Investisseur' },
      { name: 'Romain', role: 'Investisseur' },
      { name: 'Eloi', role: 'Investisseur' },
      { name: 'Bastien', role: 'Vendeur' },
      { name: 'Ismael', role: 'Acquéreur' },
    ];
  
    for (let user of users) {
      await pool.query(
        'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)',
        [user.name, faker.internet.email(), faker.internet.password(), user.role]
      );
    }
  
    // Ajout d'autres données fictives (biens immobiliers, tokens, transactions, etc.)
    // ...
  
    res.send('Base de données remplie avec succès!');
  });

  const express = require('express');
  const faker = require('@faker-js/faker');
  const pool = require('./database');
  
  const app = express();
  const PORT = 3000;
  
  app.use(express.json()); // Pour pouvoir lire le corps des requêtes POST
  
  // Route pour ajouter un bien immobilier
  app.post('/addProperty', async (req, res) => {
      const property = {
          seller_id: req.body.seller_id,
          description: req.body.description,
          localisation: req.body.localisation,
          total_value: req.body.total_value,
          // ... autres champs si nécessaire
      };
  
      await pool.query(
          'INSERT INTO properties (seller_id, description, localisation, total_value) VALUES ($1, $2, $3, $4)',
          [property.seller_id, property.description, property.localisation, property.total_value]
      );
  
      res.send('Bien immobilier ajouté avec succès!');
  });
  
  // Route pour créer une campagne de crowdfunding
  app.post('/addCampaign', async (req, res) => {
      const campaign = {
          property_id: req.body.property_id,
          goal_amount: req.body.goal_amount,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          status: "En cours"
      };
  
      await pool.query(
          'INSERT INTO campaigns (property_id, goal_amount, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5)',
          [campaign.property_id, campaign.goal_amount, campaign.start_date, campaign.end_date, campaign.status]
      );
  
      res.send('Campagne de crowdfunding créée avec succès!');
  });
  
  // Route pour ajouter une contribution
  app.post('/addContribution', async (req, res) => {
      const contribution = {
          campaign_id: req.body.campaign_id,
          investor_id: req.body.investor_id,
          amount: req.body.amount,
          tokens_received: req.body.tokens_received,
          timestamp: new Date()
      };
  
      await pool.query(
          'INSERT INTO contributions (campaign_id, investor_id, amount, tokens_received, timestamp) VALUES ($1, $2, $3, $4, $5)',
          [contribution.campaign_id, contribution.investor_id, contribution.amount, contribution.tokens_received, contribution.timestamp]
      );
  
      res.send('Contribution ajoutée avec succès!');
  });
  
  // Route pour ajouter une transaction
  app.post('/addTransaction', async (req, res) => {
      const transaction = {
          sender_id: req.body.sender_id,
          receiver_id: req.body.receiver_id,
          token_id: req.body.token_id,
          amount: req.body.amount,
          timestamp: new Date()
      };
  
      await pool.query(
          'INSERT INTO transactions (sender_id, receiver_id, token_id, amount, timestamp) VALUES ($1, $2, $3, $4, $5)',
          [transaction.sender_id, transaction.receiver_id, transaction.token_id, transaction.amount, transaction.timestamp]
      );
  
      res.send('Transaction ajoutée avec succès!');
  });
  
  app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
  

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});