//    Copyright 2013 Jack David Baucum
//
//    This file is part of Orthosie.
//
//    Orthosie is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    Orthosie is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with Orthosie.  If not, see <http://www.gnu.org/licenses/>.

if (Orthosie === undefined) {
  var Orthosie = {};
}

Orthosie.input = {
  append: function(key) {
    $('#register_input').append(key);
  },
  backspace: function() {
    $('#register_input').html($('#register_input').html().substring(0, $('#register_input').html().length - 1));
  }
}
