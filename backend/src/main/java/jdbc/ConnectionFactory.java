package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

	// Conexão com banco de dados PostgreSQL local:
	public static Connection getConnection() throws SQLException {
		try {
			// System.out.println("Oi factory");
			// Class.forName("com.mysql.jbdc.Driver");
			Class.forName("org.postgresql.Driver");
			// System.out.println("Conectando ao banco");
		//return DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "postgres");
		return DriverManager.getConnection("jdbc:postgresql://ec2-54-221-244-196.compute-1.amazonaws.com:5432/dbptjcgcbq9m9j?sslmode=require", "pbdhmdltnmfnhu", "5570ed4e8851f0b74c656ed7e56f6e819e9aa205aaee88d3860a5f0e235d2a70" );
		
		//&sslmode=require
		} catch (ClassNotFoundException e) {
			throw new SQLException(e.getMessage());
		}
	}
	
}
