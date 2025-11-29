def get_computer_grade(self, student, subject_index, term='both'):
    try:
        # Computer is at index 4 for all classes based on subject order
        computer_index = subject_index
        
        mid_val = student['mid_marks'][computer_index] if computer_index < len(student['mid_marks']) else None
        final_val = student['final_marks'][computer_index] if computer_index < len(student['final_marks']) else None
        
        if term == 'mid':
            # Check if it's already a grade (string)
            if isinstance(mid_val, str) and mid_val.strip() in ['A+', 'A', 'B', 'C', 'D', 'E', 'F']:
                return mid_val.strip()
            # If it's a number, convert to grade
            elif isinstance(mid_val, (int, float)) and mid_val > 0:
                return self.percentage_to_grade(mid_val)
            else:
                return 'C'
                
        elif term == 'final':
            # Check if it's already a grade (string)
            if isinstance(final_val, str) and final_val.strip() in ['A+', 'A', 'B', 'C', 'D', 'E', 'F']:
                return final_val.strip()
            # If it's a number, convert to grade
            elif isinstance(final_val, (int, float)) and final_val > 0:
                return self.percentage_to_grade(final_val)
            else:
                return 'C'
        else:
            # Return average grade for both terms
            mid_grade = self.get_computer_grade(student, subject_index, 'mid')
            final_grade = self.get_computer_grade(student, subject_index, 'final')
            # If both grades are the same, return that grade
            if mid_grade == final_grade:
                return mid_grade
            # Otherwise return the better grade
            return self.get_better_grade(mid_grade, final_grade)
    except Exception as e:
        print(f"Error getting computer grade: {e}")
        return 'C'
