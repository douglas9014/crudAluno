package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

	// Conexão com banco de dados PostgreSQL local:
	public static Connection getConnection() throws SQLException {
		try {
			Class.forName("org.postgresql.Driver"); // Carrega o driver do BD (a dependência deve estar presente no [pom.xml])
			// Retorna a conexão com o BD. Sintaxe atual: "jdbc:tipo_bd://domínio_ou_ip:porta/banco", "usuário", "senha"
		return DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "postgres");
	} catch (ClassNotFoundException e) { // Caso dê erro...
			throw new SQLException(e.getMessage()); // ...retorna a mensagem de erro como uma exceção SQL
		}
	}
}
