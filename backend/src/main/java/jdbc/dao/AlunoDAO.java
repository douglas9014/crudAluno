package jdbc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.jdriven.ng2boot.Aluno;

// import com.mysql.jdbc.PreparedStatement;

import jdbc.ConnectionFactory;

public class AlunoDAO {
	// a conexão com o banco de dados
	private Connection connection;

	public AlunoDAO() throws SQLException {
		this.connection = ConnectionFactory.getConnection();
	}

	public void adiciona(Aluno aluno) throws SQLException {
		// prepared statement para inserção
		PreparedStatement stmt = (PreparedStatement) this.connection
				.prepareStatement("INSERT INTO alunos (id,nome,gender) VALUES (?, ?, ?)");
		// seta os valores
		stmt.setInt(1, aluno.getId());
		stmt.setString(2, aluno.getName());
		stmt.setString(3, aluno.getGender());
		// executa
		stmt.execute();
		stmt.close();
	}

	public List<Aluno> getLista() throws SQLException {
		PreparedStatement stmt = (PreparedStatement) this.connection.prepareStatement("SELECT * FROM alunos"); // Constrói uma consulta SQL
		ResultSet rs = stmt.executeQuery(); // Executa a consulta e grava na variável [rs]
		// System.out.println("Entrou DAO");

		List<Aluno> alunos = new ArrayList<Aluno>(); // Cria uma lista de objetos de classe [Aluno]
		while (rs.next()) { // Loop que percorre a lista retornada pela consulta ao BD [SELECT]
			Aluno aluno = new Aluno(-1, "", ""); // Cria um objeto da classe [Aluno]

			// Grava seus atributos conforme o registro vindo do BD
			aluno.setId(rs.getInt("id"));
			aluno.setName(rs.getString("nome"));
			aluno.setGender(rs.getString("gender"));

			alunos.add(aluno); // Adiciona o objeto à lista de alunos
		}
		// "Fecha" a consulta ao BD
		rs.close();
		stmt.close();

		return alunos;
	}

	public Aluno getAluno(int search) throws SQLException {
		Aluno aluno = new Aluno(-1, "", "");

		try {
			PreparedStatement stmt = (PreparedStatement) this.connection
					.prepareStatement("SELECT * FROM alunos WHERE " + "id = ?");

			stmt.setLong(1, search); // Note que essa variavel é passada da
										// função principal
			ResultSet rs = stmt.executeQuery();

			if (rs.next() == true) {
				aluno.setId(rs.getInt("id"));
				aluno.setName(rs.getString("nome"));
				aluno.setGender(rs.getString("gender"));

			}
		} catch (SQLException ex) {
			System.out.println(ex.toString());
		}
		return (aluno);
	}

	public void excluir(int search) {

		try {
			PreparedStatement stmt = (PreparedStatement) this.connection
					.prepareStatement("DELETE FROM alunos WHERE id = ?");

			stmt.setLong(1, search);

			stmt.execute();

		} catch (SQLException ex) {
			System.out.println(ex.toString());
		}
	}

	public void altera(Aluno aluno) throws SQLException {

		PreparedStatement stmt = (PreparedStatement) this.connection
				.prepareStatement("UPDATE alunos SET nome=?, gender=? WHERE id=?");
		stmt.setString(1, aluno.getName());
		stmt.setString(2, aluno.getGender());
		stmt.setInt(3, aluno.getId());
		stmt.execute();
		stmt.close();
	}
}
