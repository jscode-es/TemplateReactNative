import { StatusBar, Text, useColorScheme, View } from 'react-native';
import Config from 'react-native-config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

function App() {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaProvider>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			/>
			<AppContent />
		</SafeAreaProvider>
	);
}

function AppContent() {
	console.log('Environment:', Config);
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-xl font-bold text-blue-500">
				Welcome to Nativewind!
				{`\nEnvironment: ${Config.APP_ENV}`}
			</Text>
		</View>
	);
}

export default App;
