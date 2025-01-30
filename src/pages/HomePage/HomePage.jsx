import { Typography, Container, Card, CardContent, Box } from '@mui/material';
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <Container className={css.container}>
        <Box className={css.titleContainer}>
          <Typography variant="h3" className={css.title}>
            Phonebook
          </Typography>
        </Box>

        <Box className={css.cardContainer}>
          <Box className={css.cardItem}>
            <Card>
              <CardContent className={css.cardContent}>
                <Typography variant="h6" className={css.cardTitle}>
                  About this app
                </Typography>
                <Typography variant="body1" className={css.cardText}>
                  This is a phonebook app where you can manage your contacts.
                  <br />
                  Developed by oniks98 during the GoIT program in 2025.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
}
