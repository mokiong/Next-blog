import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            return res.status(422).json({ message: 'Invalid input' });
        }

        const newMessage = {
            email,
            name,
            message,
        };

        let client;

        try {
            client = await MongoClient.connect(
                'mongodb+srv://testAdmin:ZNVbPfYH2qksUayF@cluster0.an94b.mongodb.net/next-blog?retryWrites=true&w=majority'
            );
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }

        try {
            const db = client.db();
            const result = await db
                .collection('messages')
                .insertOne(newMessage);

            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            return res.status(500).json({ message: error.message });
        }

        client.close();

        return res
            .status(201)
            .json({ message: 'Success', message: newMessage });
    }
}

export default handler;
