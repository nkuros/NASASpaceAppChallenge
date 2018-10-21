class Node:
    def __init__(self, name, row, col, time_to_colonize, science=0, materials=0, colonized = False):
        self.name = name
        self.row = row
        self.col = col
        self.time_to_colonize = time_to_colonize
        self.science = science
        self.materials = materials
        self.colonized = colonized

    def get_node(self):
        return {'name':self.name,'row':self.row,'col':self.col,'time_to_colonize':self.time_to_colonize,'science':self.science,'materials':self.materials, 'colonized':self.colonized}
