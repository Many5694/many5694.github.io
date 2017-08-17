<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class redmodel extends CI_Model {

	public function getQuestions()
	{
		$this->db->select("Qid, question, choice1, choice2, ans");
		$this->db->from("exam");
		
		$query = $this->db->get();
		
		return $query->result();
		
		$num_data_returned = $query->num_rows;
		
		if ($num_data_returned < 1) {
		  echo "There is no data in the database";
		  exit();	
		}
	}
}

