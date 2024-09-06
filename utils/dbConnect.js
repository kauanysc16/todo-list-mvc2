import mongoose from 'mongoose';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('Database não listado no .env.local');
}

const connectMongo = async () => {
    if (mongoose.connection.readyState > 0) {
        return;
    } else {
        try {
            await mongoose.connect(databaseUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('MongoDB conectado');
        } catch (err) {
            console.error('Erro ao conectar ao MongoDB:', err);
        }
    }
};

export default connectMongo;