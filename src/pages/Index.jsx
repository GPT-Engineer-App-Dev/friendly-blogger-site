import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.100" p={4} mb={8} borderRadius="md" boxShadow="md">
        <HStack spacing={8}>
          <Link href="/" fontSize="xl" fontWeight="bold">Home</Link>
          <Link href="/about" fontSize="xl" fontWeight="bold">About</Link>
          <Link href="/contact" fontSize="xl" fontWeight="bold">Contact</Link>
        </HStack>
        <Spacer />
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h1" size="xl" mb={4}>Blog Posts</Heading>
          <VStack spacing={8} align="stretch">
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h2" size="lg" mb={2}>Sample Blog Post Title</Heading>
              <Text fontSize="md">This is a summary of the blog post. Click to read more...</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h2" size="lg" mb={2}>Another Blog Post Title</Heading>
              <Text fontSize="md">This is another summary of a blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#" fontSize="md" color="blue.500">Recent Post 1</Link>
            <Link href="#" fontSize="md" color="blue.500">Recent Post 2</Link>
            <Link href="#" fontSize="md" color="blue.500">Recent Post 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Divider my={8} />
      <Flex as="footer" justify="center" py={4}>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram size="24px" />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;